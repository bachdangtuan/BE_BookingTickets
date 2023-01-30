const {Trips, Vehicles, Stations} = require('../models')
const STATUS = require("../core/constant/status.constant")
const LOG_TYPE = require("../core/constant/logtype.constant");

// TẠO NHÀ XE
const createVehicle = async (req, res) => {
    const {firebaseUrl} = req.file
    const {name, type, description, numberRegister, driver} = req.body

    try {
        const newVehicle = await Vehicles.create({
            name,
            images: firebaseUrl,
            numberRegister,
            driver,
            description,
            status: true
        })
        req.log_type = `${LOG_TYPE.INFO}`
        res.status(STATUS.STATUS_201).send({
            message: 'Tạo thành công',
            newVehicle
        })

    } catch (e) {
        req.log_type = `${LOG_TYPE.ERROR}`
    }
}


// LẤY DANH SÁCH NHÀ XE
const getAllVehicle = async (req, res) => {
    try {
        let limit = parseInt(req.query.limit)
        let page = parseInt(req.query.page)
        let start = (page - 1) * limit;
        const listVehicles = await Vehicles.findAndCountAll({
            limit: limit,
            offset: start,
        })


        req.log_type = `${LOG_TYPE.INFO}`
        res.status(STATUS.STATUS_200).send({
            thisPage: page,
            limit: limit,
            data: listVehicles.rows,
            totalItems: listVehicles.count,
            message: 'Lấy thành công',
        })
    } catch (e) {
        req.log_type = `${LOG_TYPE.ERROR}`
        res.status(STATUS.STATUS_500).send({
            message: 'Lỗi server',
        })
    }
}

module.exports = {
    createVehicle,
    getAllVehicle,

}
