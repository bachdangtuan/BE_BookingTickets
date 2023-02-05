const jwt = require('jsonwebtoken')
const STATUS = require("../../core/constant/status.constant");
const clientRedis = require('../../service/connectRedis').module //connect redis

const refreshToken = (req, res, next) => {
    try {
        const refreshToken = req.header("refreshToken");
        if (!refreshToken) {
            res.status(404).send({
                message: 'Bạn chưa đăng nhập',
            })
        } else {
            jwt.verify(refreshToken, '12345678', (err, payload) => {
                // trường hợp lỗi
                if (err) {
                    return res.status(404).send({
                        message: 'err'
                    })
                } else {
                    // kiểm tra trên redis có chứa không
                    clientRedis.get(payload.id, (err, reply) => {
                        // trường hợp lỗi
                        if (err) {
                            res.status(500).send({
                                message: 'Lỗi server',
                            })
                        } else {
                            // trường hợp còn tồn tại trong redis
                            if (reply === refreshToken) {
                                const {username, type} = payload
                                const accessToken = jwt.sign({username: username, type: type}, "12345678", {
                                    expiresIn: 60
                                });
                                res.status(200).send({
                                    accessToken,
                                    message: "Refresh Token mới được tạo !"
                                })
                            } else {
                                res.status(404).send({
                                    message: 'Token hết hạn',
                                })
                            }
                        }
                    })

                }
            })


        }

    } catch (e) {
        res.status(500).send({
            message: 'Lỗi server',
        })
    }
}


module.exports = {
    refreshToken
}
