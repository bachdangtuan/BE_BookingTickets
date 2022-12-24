const express = require('express')
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
stationsRouter.get("/:id", getDetailStation);
stationsRouter.put("/:id", updateDetailStation);
stationsRouter.delete("/:id", deleteDetailStation);


// export modules router
module.exports = {
    stationsRouter
}