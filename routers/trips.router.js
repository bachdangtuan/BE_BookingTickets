const express = require('express');
const {createTrip, getAllTrip, getTripsDetail, importTrip} = require("../controller/trips.controller");
const {
    checkFileUploadTypeExcel,
    uploadXLSXSaveStoreCloud,
    uploadSingleImageDiskStore
} = require("../middleware/upload/upload");
const {authorize} = require("../middleware/authenticate/authorize");
const {authenticate} = require("../middleware/authenticate/authenticate");

const TripsRouter = express.Router();


TripsRouter.post("/create-trip", createTrip);
TripsRouter.get("/list-trips", getAllTrip);
TripsRouter.get("/:id", getTripsDetail);
TripsRouter.post("/import-trip", uploadSingleImageDiskStore(), importTrip);

module.exports = {
    TripsRouter,
}
