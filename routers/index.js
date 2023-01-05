const express = require('express')
const {stationsRouter} = require("./stations.router");
const {UsersRouter} = require("./users.router");
const {TripsRouter} = require("./trips.router");
const {passengerCompaniesRouter} = require("./passengerCarCompanies.router");

const rootRouter = express.Router();


rootRouter.use('/users', UsersRouter)
rootRouter.use('/trips', TripsRouter)
rootRouter.use('/stations', stationsRouter)
rootRouter.use('/companies', passengerCompaniesRouter)


module.exports = {rootRouter}