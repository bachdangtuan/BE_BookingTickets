const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
    ip: String,
    method: String,
    url: String,
    status: String,
    responseTime: String,
    timestamp: {type: Date, default: Date.now}
})

const Log = mongoose.model('Log', LogSchema, 'Log')
module.exports = {
    LogSchema, Log
}
