// const morgan = require("morgan");
const mongoose = require('mongoose');
const morganJson = require('morgan-json');
const morgan = require("morgan");
const {Log} = require("../../models/mongoDB/Log");
const mongoURI = 'mongodb+srv://dangtuan:ad8EQJDoUQssDhGY@cluster0.ymsq3wi.mongodb.net/?retryWrites=true&w=majority'
// const { IPinfoWrapper } = require("node-ipinfo");
// const ipinfo = new IPinfoWrapper("8a64edcc8feaa7");
const geoip = require('geoip-lite');


// connect DB
mongoose.set('strictQuery', true);
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`connected to ${mongoURI} `)
}).catch(err => {
    console.log(err)
})


const format = morganJson({
    log_type: ':log_type',
    IP_request: ':remote-addr',
    method: ':method',
    url: ':url',
    status: ':status',
    response: ':response-time ms'
});


// const loggerService = () => {
//     return morgan(':log_type :method :url :status :res[content-length] - :response-time ms')
// }


const loggerService = () => {

    return morgan(format, {
        stream: {
            write: (message) => {
                const logData = JSON.parse(message)
                // check vị trí IP request tại đây
                // const ip = logData.IP_request;
                const ip = '113.190.206.59';

                const geoIP = geoip.lookup(ip);

                console.log(geoIP)
                const log = new Log({
                    ip: logData.IP_request,
                    geoIP: geoIP,
                    logtype: logData.log_type,
                    method: logData.method,
                    url: logData.url,
                    status: logData.status,
                    responseTime: logData.response
                });

                console.log(log)
                log.save().then();
            }
        }
    })
}


module.exports = {
    loggerService
}
