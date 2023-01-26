const {passengerCarCompanies, Trips, Vehicles, Stations, users} = require('../models')
const STATUS = require("../core/constant/status.constant")
// TẠO NHÀ XE
const createCompany = async (req, res) => {
    const {name, image, description, email, phone, address} = req.body
    const {firebaseUrl} = req.file
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

    res.status(STATUS.STATUS_201).send({
        message: 'Tạo thành công',
        newCompany
    })
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
        res.status(STATUS.STATUS_200).send({
            thisPage: page,
            limit: limit,
            data: listCompanies.rows,
            totalItems: listCompanies.count,
            message: 'Lấy thành công',
        })
    } catch (e) {

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

    } catch (e) {
        res.status(STATUS.STATUS_500).send(e)
    }

}

const uploadAvatarCompany = (req, res) => {
    const {firebaseUrl} = req.file
    console.log('firebaseUrl', firebaseUrl)

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
