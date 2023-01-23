const express = require('express');
const {uploadSaveStoreCloud, checkFileUploadType} = require("../middleware/upload/upload");
const {getAllVehicle, createVehicle} = require("../controller/vehicle.controller");


const vehicleRouter = express.Router();


vehicleRouter.get("/list-vehicle", getAllVehicle);
vehicleRouter.post("/create-vehicle", checkFileUploadType(), uploadSaveStoreCloud, createVehicle);

module.exports = {
    vehicleRouter,
}
