const express = require('express')
const {stationsRouter} = require("./stations.router");

const rootRouter = express.Router();
rootRouter.use('/stations', stationsRouter)
module.exports = {rootRouter}