const {Stations} = require('../models')
const {Op} = require('sequelize')
const STATUS = require("../core/constant/status.constant")

// Hàm tạo Bến Xe
const createStation = async (req, res) => {
    // console.log('req', req.body)
    const {name, address, province} = req.body
    try {
        const newStations = await Stations.create({
            name, address, province
        })
        res.status(STATUS.STATUS_201).send(newStations)
    } catch (err) {
        res.status(STATUS.STATUS_500).send(err)
    }
}

// Hàm lấy danh sách bến xe (search)
const getAllStation = async (req, res) => {
    const {name} = req.query
    try {
        if (!name) {
            const stationList = await Stations.findAll()
            res.status(STATUS.STATUS_200).send(stationList)
        } else {
            const stationList = await Stations.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    },
                },
            })
            res.status(STATUS.STATUS_200).send(stationList)
        }

    } catch (err) {
        res.status(STATUS.STATUS_500).send(err)
    }
}

// Hàm lấy dữ liệu 1 bến xe
const getDetailStation = async (req, res) => {
    const {id} = req.params
    try {
        // tìm trong DB có id không
        const station = await Stations.findOne({
            where: {id}
        })
        res.status(STATUS.STATUS_200).send(station)
    } catch (err) {
        res.status(STATUS.STATUS_500).send(err)
    }
}

// Hàm cập nhật dữ liệu bến xe
const updateDetailStation = async (req, res) => {
    const {id} = req.params
    const {name, address, province} = req.body
    try {
        // Lệnh tìm trong DB có id không, tiếp theo đó
        const stationDetail = await Stations.findOne({
            where: {id}
        })
        stationDetail.name = name;
        stationDetail.address = address;
        stationDetail.province = province;
        await stationDetail.save()
        return res.status(STATUS.STATUS_200).json({
            stationDetail,
            message: 'Cập nhật thành công'
        })
    } catch (err) {
        res.status(STATUS.STATUS_500).send(err)
    }
}

// Hàm xóa Bến xe
const deleteDetailStation = async (req, res) => {
    const {id} = req.params
    try {
        // Lệnh tìm trong DB có id không, tiếp theo đó
        await Stations.destroy({
            where: {id}
        })
        return res.status(200).json({
            message: 'Cập nhật thành công'
        })
    } catch (err) {
        res.status(STATUS.STATUS_500).send(err)
    }
}

module.exports = {
    createStation,
    getAllStation,
    getDetailStation,
    updateDetailStation,
    deleteDetailStation
}
