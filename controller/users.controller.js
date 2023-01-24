const {Users} = require("../models/");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const {Trips, Stations, Ticket} = require('../models')

const STATUS = require("../core/constant/status.constant")

// Hàm tạo user
const createUser = async (req, res) => {
    // console.log('req', req.body)
    const {name, email, password, username, numberPhone} = req.body
    try {
        // tạo ra chuỗi ngẫu nhiên
        const salt = bcrypt.genSaltSync(15)
        // mã hóa chuỗi
        const hashPass = bcrypt.hashSync(password, salt)
        const newStations = await Users.create({
            name, email, password: hashPass, numberPhone, username
        })
        res.status(STATUS.STATUS_201).send(newStations)
    } catch (err) {
        res.status(STATUS.STATUS_500).send(err)
    }
}

// Hàm login
const loginUser = async (req, res) => {
    const {username, password} = req.body
    // tìm user tồn tại
    const user = await Users.findOne({
        where: {username}
    })
    if (user) {
        const isAuth = bcrypt.compareSync(password, user.password)
        if (isAuth) {
            const accessToken = jwt.sign({username: user.username, type: user.type}, "12345678", {
                expiresIn: 60 * 60
            });
            res.status(STATUS.STATUS_200).send({
                user,
                accessToken,
                message: "Người dùng đăng nhập thành công !"
            })
        } else {
            return res.status(STATUS.STATUS_400).send({
                message: "Tài khoản mật khẩu không đúng !"
            })
        }
    } else {
        return res.status(STATUS.STATUS_404).send({
            message: "Không có tài khoản"
        })
    }
    // kiểm tra mật khẩu
}

// Hàm lấy dữ liệu
const getAllUser = async (req, res) => {
    try {
        const newUser = await Users.findAll(
            {
                include: [
                    {
                        model: Trips,
                        as: 'trip',
                        through: {attributes: []},
                        attributes: {exclude: ['createdAt', 'updatedAt', 'fromStation', 'toStation']},
                        include: [
                            {
                                model: Stations,
                                as: "from",
                                attributes: {exclude: ['createdAt', 'updatedAt']},
                            },
                            {
                                model: Stations,
                                as: "to",
                                attributes: {exclude: ['createdAt', 'updatedAt']},
                            },
                        ]
                    },
                ],
                attributes: {exclude: ['createdAt', 'updatedAt', 'password']}
            }
        )
        res.status(STATUS.STATUS_201).send(newUser)
    } catch (err) {
        res.status(STATUS.STATUS_500).send(err)
    }
}

// Hàm xe chi tiết một user
const getUserDetail = async (req, res) => {
    const {id} = req.params
    try {
        // tìm trong DB có id không
        const user = await Users.findOne({
            where: {id},
            include: [
                {
                    model: Trips,
                    as: 'trip',
                    through: {attributes: []},
                    attributes: {exclude: ['createdAt', 'updatedAt', 'fromStation', 'toStation']},
                    include: [
                        {
                            model: Stations,
                            as: "from",
                            attributes: {exclude: ['createdAt', 'updatedAt']},
                        },
                        {
                            model: Stations,
                            as: "to",
                            attributes: {exclude: ['createdAt', 'updatedAt']},
                        },
                    ]
                },
            ],
        })
        res.status(STATUS.STATUS_200).send(user)
    } catch (err) {
        res.status(STATUS.STATUS_500).send(err)
    }
}

// Hàm upload avatar
const uploadAvatar = async (req, res) => {
    const {firebaseUrl} = req.file
    const {user} = req
    // tìm kiếm User trong bảng DB
    const userFound = await Users.findOne({
        username: user.username
    })
    userFound.avatar = firebaseUrl
    await userFound.save()

    res.status(STATUS.STATUS_200).send(userFound)


}

// Hàm lấy lại mật khẩu
const resetPassword = async (req, res) => {
    const {email} = req.body
    try {
        const user = await Users.findOne({
            where: {email}
        })
        if (user) {
            res.status(STATUS.STATUS_200).send({
                user,
                message: 'Thành công'
            })
        } else {
            res.status(STATUS.STATUS_404).send({
                message: 'Không có user nào với email'
            })
        }

    } catch (e) {
        res.status(STATUS.STATUS_500).send({
            message: 'Lỗi server'
        })
    }


}


module.exports = {
    createUser, getAllUser, getUserDetail, loginUser, uploadAvatar, resetPassword
}
