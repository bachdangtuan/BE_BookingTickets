const {passengerCarCompanies, Trips, Vehicles, Stations, users} = require('../models')
const STATUS = require("../core/constant/status.constant")

const LOG_TYPE = require('../core/constant/logtype.constant')

// TẠO NHÀ XE
const createCompany = async (req, res) => {
    const {name, image, description, email, phone, address} = req.body
    const {firebaseUrl} = req.file
    try {
        console.log('firebaseUrl', firebaseUrl)
        const newCompany = await passengerCarCompanies.create({
            name,
            image: firebaseUrl,
            email,
            description,
            phone,
            address,
            status: true
        })
        req.log_type = `${LOG_TYPE.INFO}`
        res.status(STATUS.STATUS_201).send({
            message: 'Tạo thành công',
            newCompany
        })

    } catch (e) {
        req.log_type = `${LOG_TYPE.ERROR}`
    }
}


// LẤY DANH SÁCH NHÀ XE
const getAllCompanies = async (req, res) => {
    try {
        let limit = parseInt(req.query.limit)
        let page = parseInt(req.query.page)
        let start = (page - 1) * limit;
        const listCompanies = await passengerCarCompanies.findAndCountAll({
            limit: limit,
            offset: start,
            include: [
                {
                    model: Trips,
                    as: "trip"
                },
            ],
        })
        req.log_type = `${LOG_TYPE.INFO}`
        res.status(STATUS.STATUS_200).send({
            thisPage: page,
            limit: limit,
            data: listCompanies.rows,
            totalItems: listCompanies.count,
            message: 'Lấy thành công',
        })
    } catch (e) {
        req.log_type = `${LOG_TYPE.ERROR}`
    }
}

const getDetailCompanies = async (req, res) => {
    try {
        const {id} = req.params
        const detailCompanies = await passengerCarCompanies.findOne({
            where: {id},
            include: [
                {
                    model: Trips,
                    as: "trip",
                    through: {attributes: []},
                    attributes: {exclude: ['createdAt', 'updatedAt', 'fromStation', 'toStation']},
                    include: [
                        {
                            model: Stations,
                            as: "from",
                            attributes: {exclude: ['createdAt', 'updatedAt']}
                        },
                        {
                            model: Stations,
                            as: "to",
                            attributes: {exclude: ['createdAt', 'updatedAt']}
                        },
                        {
                            model: users,
                            as: 'user',
                            through: {attributes: []},
                            attributes: {exclude: ['createdAt', 'updatedAt', 'password']}
                        },
                    ]
                },
                {
                    model: Vehicles,
                    as: "vehicle",
                    through: {attributes: []},
                    attributes: {exclude: ['createdAt', 'updatedAt']}
                },
            ]
        })
        res.status(STATUS.STATUS_200).send(detailCompanies)
        req.log_type = `${LOG_TYPE.INFO}`
    } catch (e) {
        res.status(STATUS.STATUS_500).send(e)
        req.log_type = `${LOG_TYPE.ERROR}`
    }

}

const uploadAvatarCompany = (req, res) => {
    const {firebaseUrl} = req.file
    // console.log('firebaseUrl', firebaseUrl)
    res.status(STATUS.STATUS_200).send({
        message: 'Thành công',
        firebaseUrl
    })

}


module.exports = {
    createCompany,
    getAllCompanies,
    getDetailCompanies,
    uploadAvatarCompany
}
