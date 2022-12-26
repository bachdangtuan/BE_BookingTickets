const express = require('express')
const {stationsRouter} = require("./stations.router");
const {UsersRouter} = require("./users.router");

const rootRouter = express.Router();


rootRouter.use('/users', UsersRouter)
rootRouter.use('/stations', stationsRouter)

module.exports = {rootRouter}