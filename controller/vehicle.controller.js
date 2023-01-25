const {Trips, Vehicles, Stations} = require('../models')
const STATUS = require("../core/constant/status.constant")

// TẠO NHÀ XE
const createVehicle = async (req, res) => {
    const {firebaseUrl} = req.file
    const {name, type, description, numberRegister, driver} = req.body

    const newVehicle = await Vehicles.create({
        name,
        images: firebaseUrl,
        numberRegister,
        driver,
        description,
        status: true
    })
    res.status(STATUS.STATUS_201).send({
        message: 'Tạo thành công',
        newVehicle
    })
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
        res.status(STATUS.STATUS_200).send({
            thisPage: page,
            limit: limit,
            data: listVehicles.rows,
            totalItems: listVehicles.count,
            message: 'Lấy thành công',
        })
    } catch (e) {
        res.status(STATUS.STATUS_500).send({
            message: 'Lỗi server',
        })
    }
}

module.exports = {
    createVehicle,
    getAllVehicle,

}
