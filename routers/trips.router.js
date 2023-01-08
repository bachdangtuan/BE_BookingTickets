const express = require('express');
const {createTrip, getAllTrip, getTripsDetail} = require("../controller/trips.controller");


const TripsRouter = express.Router();


TripsRouter.post("/create-trip", createTrip);
TripsRouter.get("/list-trips", getAllTrip);
TripsRouter.get("/:id", getTripsDetail);

module.exports = {
    TripsRouter,
}