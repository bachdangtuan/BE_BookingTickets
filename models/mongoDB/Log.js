const mongoose = require('mongoose');


const geoIP = new mongoose.Schema({
    range: [],
    country: String,
    region: String,
    eu: String,
    timezone: String,
    ll: [],
    metro: Number,
    area: Number
});

const LogSchema = new mongoose.Schema({
    ip: String,
    method: String,
    url: String,
    status: String,
    logtype: String,
    geoIP: geoIP,
    responseTime: String,
    timestamp: {type: Date, default: Date.now}
})

const Log = mongoose.model('Log', LogSchema, 'Log')
module.exports = {
    LogSchema, Log
}
