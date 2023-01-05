const {passengerCarCompanies, Trips} = require('../models')

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
    const listCompanies = await passengerCarCompanies.findAll({
        include: [
            {
                model: Trips,
                as: "lo_trinh"
            },
        ]
    })
    res.status(200).send({
        message: 'Lấy thành công',
        listCompanies
    })
}


const uploadAvatarCompany = (req, res) => {

    res.status(200).send({
        message: 'Thành công'
    })

}


module.exports = {
    createCompany,
    getAllCompanies,
    uploadAvatarCompany
}