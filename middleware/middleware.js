const {Stations, Users} = require('../models')
const LOG_TYPE = require("../core/constant/logtype.constant");


const checkExist = async (req, res, next) => {
    const {id} = req.params
    const station = await Stations.findOne({
        where: {
            id,
        }
    })
    if (station) {
        next();
    } else {
        req.log_type = `${LOG_TYPE.WARNING}`
        res.status(404).send(`Không có id là ${id}`)
    }
}

const checkExistUser = async (req, res, next) => {
    const {id} = req.params
    const station = await Users.findOne({
        where: {
            id,
        }
    })
    if (station) {
        next();
    } else {
        req.log_type = `${LOG_TYPE.WARNING}`
        res.status(404).send(`Không có id là ${id}`)
    }
}

module.exports = {
    checkExist,
    checkExistUser,
}
