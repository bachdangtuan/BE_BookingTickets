// const morgan = require("morgan");
const mongoose = require('mongoose');
const morganJson = require('morgan-json');
const morgan = require("morgan");
const {Log} = require("../../models/mongoDB/Log");
const mongoURI = 'mongodb+srv://dangtuan:ad8EQJDoUQssDhGY@cluster0.ymsq3wi.mongodb.net/?retryWrites=true&w=majority'

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
    IP_request: ':remote-addr',
    short: ':method',
    url: ':url',
    status: ':status',
    response: ':response-time ms'
});



const loggerService = () => {
    // // let ip
    // return morgan((tokens, req, res) => {
    //     console.log(req.ipInfo)
    //     console.log(req.route)
    //
    // })

    return morgan(format, {
        stream: {
            write: (message) => {
                const logData = JSON.parse(message)
                console.log(logData)
                const log = new Log({
                    ip: logData.IP_request,
                    method: logData.method,
                    url: logData.url,
                    status: logData.status,
                    responseTime: logData.response
                });
                log.save().then();
            }
        }
    })
}

module.exports = {
    loggerService
}
