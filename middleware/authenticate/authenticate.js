const jwt = require('jsonwebtoken')


const authenticate = (req, res, next) => {
    const accessToken = req.header("token");

    if (accessToken) {
        const decode = jwt.verify(accessToken, '12345678')
        if (!decode) {
            return res.status(401).send({
                message: 'Bạn cần phải đăng nhập'
            })
        } else {
            return next();
        }
    } else {
        res.status(404).send({
            message: 'Not found',
        })
    }
}


module.exports = {
    authenticate
}