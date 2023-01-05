const {Trips, Stations} = require('../models')

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
                    as: "from"
                },
                {
                    model: Stations,
                    as: "to"
                }
            ]
        }
    )
    res.status(200).send({
        message: 'Lấy thành công',
        listTrips
    })
}


module.exports = {createTrip, getAllTrip}