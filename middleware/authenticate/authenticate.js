const jwt = require('jsonwebtoken')


const authenticate = (req, res, next) => {
    const accessToken = req.header("AccessToken");

    try {
        if (accessToken) {
            jwt.verify(accessToken, '12345678', (err, payload) => {
                if (err) {
                    if (err.name === 'JsonWebTokenError') {
                        return res.status(401).send({
                            message: 'JsonWebTokenError'
                        })
                    } else {
                        return res.status(401).send({
                            message: 'JWT hết hạn'
                        })
                    }


                } else {
                    req.user = payload
                    return next();
                }


            })
        } else {
            res.status(404).send({
                message: 'Bạn chưa đăng nhập',
            })
        }

    } catch (e) {
        res.status(500).send({
            message: 'Lỗi server',
        })
    }
}


module.exports = {
    authenticate
}
