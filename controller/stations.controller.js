const {Stations} = require('../models')
const {Op} = require('sequelize')

// Hàm tạo Bến Xe
const createStation = async (req, res) => {
    // console.log('req', req.body)
    const {name, address, province} = req.body
    try {
        const newStations = await Stations.create({
            name, address, province
        })
        res.status(201).send(newStations)
    } catch (err) {
        res.status(500).send(err)
    }
}
// Hàm lấy danh sách bến xe (search)
const getAllStation = async (req, res) => {
    const {name} = req.query
    try {
        if (!name) {
            const stationList = await Stations.findAll()
            res.status(200).send(stationList)
        } else {
            const stationList = await Stations.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                },
            })
            res.status(200).send(stationList)
        }

    } catch (err) {
        res.status(500).send(err)
    }
}
// Hàm lấy dữ liệu 1 bến xe
const getDetailStation = async (req, res) => {
    const {id} = req.params
    try {
        // tìm trong DB có id không
        await Stations.findOne({
            where: {id}
        }).then(async station => {
            // nếu không có bến xe nào thì trả về 1 message
            await checkValue(station, id)
            res.status(200).send(station)
        })
    } catch (err) {
        res.status(500).send(err)
    }
}
// Hàm cập nhật dữ liệu bến xe
const updateDetailStation = async (req, res) => {
    const {id} = req.params
    const {name, address, province} = req.body
    try {
        // Lệnh tìm trong DB có id không, tiếp theo đó
        await Stations.findOne({
            where: {id}
        }).then(async station => {
            await checkValue(station, id)
            // nếu có bến xe thì sẽ thực hiện update lại db
            station.name = name;
            station.address = address;
            station.province = province;
            station.save()
            //sau khi save xong thì trả về cho người dùng
            return res.status(200).json({
                station,
                message: 'Cập nhật thành công'
            })
        })
    } catch (err) {
        res.status(500).send(err)
    }
}
// Hàm xóa Bến xe

const deleteDetailStation = async (req, res) => {
    const {id} = req.params
    try {
        // Lệnh tìm trong DB có id không, tiếp theo đó
        await Stations.destroy({
            where: {id}
        }).then(async station => {
            await checkValue(station, id)

            //sau khi save xong thì trả về cho người dùng
            return res.status(200).json({
                message: 'Cập nhật thành công'
            })
        })
    } catch (err) {
        res.status(500).send(err)
    }
}


// Chạy hàm check có hoặc không
checkValue = (value, id) => {
    if (!value) return Promise.reject({
        status: 404,
        message: `Không có bến xe nào với id là ${id}`
    })
}

module.exports = {
    createStation,
    getAllStation,
    getDetailStation,
    updateDetailStation,
    deleteDetailStation
}