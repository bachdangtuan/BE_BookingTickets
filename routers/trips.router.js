const express = require('express');
const {createTrip, getAllTrip} = require("../controller/trips.controller");


const TripsRouter = express.Router();


TripsRouter.post("/create-trip", createTrip);
TripsRouter.get("/list-trips", getAllTrip);


module.exports = {
    TripsRouter,
}