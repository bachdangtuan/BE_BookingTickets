const express = require('express');
const path = require('path');
const {sequelize} = require('./models');
const app = express();
const {rootRouter} = require('./routers')

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