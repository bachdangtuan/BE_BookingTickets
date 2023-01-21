const {passengerCarCompanies, Trips, Vehicles, Stations, Users} = require('../models')

// TẠO NHÀ XE
const createCompany = async (req, res) => {
    const {name, image, description, trip_id} = req.body

    const newCompany = await passengerCarCompanies.create({
        name,
        image,
        description,
        trip_id
    })

    res.status(201).send({
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
            include: [
                {
                    model: Trips,
                    as: "trip"
                },
            ],
            limit: limit,
            offset: start,
        })
        res.status(200).send({
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
                            model: Users,
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
        res.status(200).send(detailCompanies)

    } catch (e) {
        res.status(500).send(e)
    }

}

const uploadAvatarCompany = (req, res) => {

    res.status(200).send({
        message: 'Thành công'
    })

}


module.exports = {
    createCompany,
    getAllCompanies,
    getDetailCompanies,
    uploadAvatarCompany
}
