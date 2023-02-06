const {Trips, Stations, users, passengerCarCompanies, Vehicles} = require('../models')
const xlsx = require('xlsx')
const axios = require('axios');
const moment = require("moment");
const sequelize = require("sequelize");
const STATUS = require("../core/constant/status.constant")
const LOG_TYPE = require("../core/constant/logtype.constant");
const clientRedis = require('../service/connectRedis').module //connect redis


const importTrip = async (req, res) => {
    /* Logic upload file lưu vào thư mục public sau đó đọc file và insert vào bảng */
    const xlFile = xlsx.readFile('public/dataExcel.xlsx')
    const sheet = xlFile.Sheets[xlFile.SheetNames[0]]

    const JSON_RAW = xlsx.utils.sheet_to_json(sheet)

    try {
        for (let i = 0; i < JSON_RAW.length; i++) {
            JSON_RAW[i].startTime = new Date(Math.round((JSON_RAW[i].startTime - 25569) * 86400 * 1000))
            await Trips.create({
                    startTime: JSON_RAW[i].startTime,
                    fromStation: JSON_RAW[i].fromStation,
                    toStation: JSON_RAW[i].toStation,
                    price: JSON_RAW[i].price,
                    status: '1',
                }
            )
        }
        req.log_type = `${LOG_TYPE.INFO}`
        res.status(STATUS.STATUS_200).send({
            message: 'Upload thành công',
            JSON_RAW,

        })
    } catch (err) {
        res.send(err)
        req.log_type = `${LOG_TYPE.ERROR}`
    }
}

const createTrip = async (req, res) => {
    const {fromStation, toStation, startTime, price} = req.body

    try {
        const newTrip = await Trips.create({
            fromStation,
            toStation,
            startTime,
            price,
            status: '1'
        })
        req.log_type = `${LOG_TYPE.INFO}`
        res.status(STATUS.STATUS_201).send({
            message: 'Tạo thành công',
            newTrip
        })

    } catch (e) {
        req.log_type = `${LOG_TYPE.ERROR}`
    }

}

const getAllTrip = async (req, res) => {
    try {

        // console.log(req.query.status)
        // console.log(req.query.limit)
        // console.log(req.query.page)


        const status = parseInt(req.query.status)
        const limit = parseInt(req.query.limit) || 10
        const page = parseInt(req.query.page) || 1
        const start = (page - 1) * limit;

        let optionQueryDB = {
            limit: limit,
            offset: start,
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
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'password']
                    }
                },
            ],
            attributes: {exclude: ['fromStation', 'toStation', 'createdAt', 'updatedAt']}
        }
        if (status) {
            console.log('tồn tại status')
            optionQueryDB.where = {status: status}
        }

        clientRedis.get(`list-trip-${page}-${status}`, async (err, reply) => {

            console.log('reply', reply)

            if (err) {
                const listTrips = await Trips.findAndCountAll(optionQueryDB);
                req.log_type = `${LOG_TYPE.INFO}`
                res.status(STATUS.STATUS_200).send({
                    message: 'Lấy thành công',
                    thisPage: page,
                    limit: limit,
                    data: listTrips.rows,
                    totalItems: listTrips.count,
                })
            } else {
                if (!reply) {
                    const listTrips = await Trips.findAndCountAll(optionQueryDB);
                    req.log_type = `${LOG_TYPE.INFO}`
                    res.status(STATUS.STATUS_200).send({
                        message: 'Lấy thành công',
                        thisPage: page,
                        limit: limit,
                        data: listTrips.rows,
                        totalItems: listTrips.count,
                    })

                    await clientRedis.set(`list-trip-${page}-${status} `, JSON.stringify(listTrips), 'EX', 300, (err) => {
                        if (err) return res.status(STATUS.STATUS_500).send({
                            message: "Lỗi sơ vơ"
                        })
                    })

                } else {
                    const listTrips = JSON.parse(reply)
                    console.log(listTrips)
                }


            }
        })


    } catch (e) {
        req.log_type = `${LOG_TYPE.ERROR}`
        res.status(STATUS.STATUS_500).send(e)
    }

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
                    model: users,
                    as: 'user',
                    through: {attributes: []},
                    attributes: {exclude: ['createdAt', 'updatedAt', 'password']}
                },
            ],

            where: {id}
        })
        req.log_type = `${LOG_TYPE.INFO}`
        res.status(STATUS.STATUS_200).send(trip)
    } catch (err) {
        req.log_type = `${LOG_TYPE.ERROR}`
        res.status(STATUS.STATUS_500).send(err)
    }
}

module.exports = {createTrip, getAllTrip, getTripsDetail, importTrip}
