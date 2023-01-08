const {Trips, Stations, Users, Ticket, passengerCarCompanies, Vehicles} = require('../models')

const createTrip = async (req, res) => {
    const {fromStation, toStation, startTime, price} = req.body

    const newTrip = await Trips.create({
        fromStation,
        toStation,
        startTime,
        price
    })

    res.status(201).send({
        message: 'Tạo thành công',
        newTrip
    })
}

const getAllTrip = async (req, res) => {
    const listTrips = await Trips.findAll({
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
                    model: passengerCarCompanies,
                    as: "company",
                    through: {attributes: []},
                    attributes: {exclude: ['createdAt', 'updatedAt']}
                },
                {
                    model: Users,
                    as: 'user',
                    through: {attributes: []},
                    attributes: {exclude: ['createdAt', 'updatedAt', 'password']}
                },
            ],
            attributes: {exclude: ['fromStation', 'toStation', 'createdAt', 'updatedAt']}
        }
    )
    res.status(200).send({
        message: 'Lấy thành công',
        listTrips
    })
}
// Hàm xe chi tiết một chuyến đi
const getTripsDetail = async (req, res) => {
    const {id} = req.params
    try {
        // tìm trong DB có id không
        const trip = await Trips.findOne({
            attributes: {exclude: ['fromStation', 'toStation', 'createdAt', 'updatedAt']},
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
                    model: passengerCarCompanies,
                    as: "company",
                    through: {attributes: []},
                    attributes: {exclude: ['createdAt', 'updatedAt']},
                    include: [
                        {
                            model: Vehicles,
                            as: "vehicle",
                        }
                    ]
                },
                {
                    model: Users,
                    as: 'user',
                    through: {attributes: []},
                    attributes: {exclude: ['createdAt', 'updatedAt', 'password']}
                },
            ],

            where: {id}
        })
        res.status(200).send(trip)
    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports = {createTrip, getAllTrip, getTripsDetail}
