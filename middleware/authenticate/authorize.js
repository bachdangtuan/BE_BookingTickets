const {TYPE_USER} = require("../../ultils/common.constant");
const authorize = (req, res, next) => {

    const {user} = req
    // check type người dùng gửi lên
    if (TYPE_USER.findIndex(e => e === user.type) > -1) {
        next()
    } else {
        res.status(403).send({
            message:'Bạn không đủ quyền hạn để thực hiện'
        })
    }

}

module.exports = {
    authorize
}