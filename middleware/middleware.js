const {Stations, Users} = require('../models')


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
        res.status(404).send(`Không có id là ${id}`)
    }
}

module.exports = {
    checkExist,
    checkExistUser,
}