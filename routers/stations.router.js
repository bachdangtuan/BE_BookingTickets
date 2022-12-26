const express = require('express')

const {checkExist} = require('../middleware/middleware')

const {
    createStation,
    getAllStation,
    getDetailStation,
    updateDetailStation,
    deleteDetailStation
} = require("../controller/stations.controller");
const stationsRouter = express.Router();


// setup Router API
stationsRouter.post("/", createStation);
stationsRouter.get("/", getAllStation);
stationsRouter.get("/:id", checkExist, getDetailStation);
stationsRouter.put("/:id", checkExist, updateDetailStation);
stationsRouter.delete("/:id", checkExist, deleteDetailStation);


// export modules router
module.exports = {
    stationsRouter
}