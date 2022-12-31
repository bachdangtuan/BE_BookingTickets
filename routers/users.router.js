const express = require('express');
const {checkExistUser} = require('../middleware/middleware')
const {createUser, getAllUser, getUserDetail, loginUser} = require("../controller/users.controller");
const {authenticate} = require("../middleware/authenticate/authenticate");
const {uploadSingleImage, uploadAvatar} = require("../middleware/upload/upload");


const UsersRouter = express.Router();

UsersRouter.get("/:id", checkExistUser, getUserDetail)
UsersRouter.post("/register", createUser);
UsersRouter.post("/login", loginUser);
UsersRouter.post("/upload-avatar", authenticate, uploadSingleImage(), uploadAvatar);
UsersRouter.get("/", authenticate, getAllUser);

module.exports = {
    UsersRouter
}