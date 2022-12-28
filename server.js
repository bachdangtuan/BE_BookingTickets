const express = require('express');
const path = require('path');
const {sequelize} = require('./models');
const app = express();
const {rootRouter} = require('./routers')


// Add headers before the routes are defined
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent

    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});


// cài đặt kiểu json ép kiểu json
app.use(express.json());

//using router
app.use("/api/v1",rootRouter)

// cài đặt static file
const publicPathDir = path.join(__dirname, "./public")

// lắng nghe sự kiện kết ni
app.use(express.static(publicPathDir))
app.listen(5000, async () => {
    console.log('Server khoi tao port 5000 http://localhost:5000')
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

})