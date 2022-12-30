const express = require('express');
const {checkExistUser} = require('../middleware/middleware')
const {createUser, getAllUser, getUserDetail, loginUser} = require("../controller/users.controller");
const {authenticate} = require("../middleware/authenticate/authenticate");


const UsersRouter = express.Router();

UsersRouter.get("/:id", checkExistUser, getUserDetail)
UsersRouter.post("/register", createUser);
UsersRouter.post("/login", loginUser);

// upload
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) { // lưu ở đâu
        cb(null, './public')
    },
    filename: function (req, file, cb) { // đặt lại tên file
        cb(null, Date.now()+ "-" + file.originalname)
    }

})
const upload = multer({storage})
UsersRouter.post("/upload-avatar", upload.single('avatar'), (req, res) => {
    res.send('upload thanh cong')
});


UsersRouter.get("/", authenticate, getAllUser);

module.exports = {
    UsersRouter
}