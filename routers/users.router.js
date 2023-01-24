const express = require('express');
const {checkExistUser} = require('../middleware/middleware')
const {
    createUser,
    getAllUser,
    getUserDetail,
    loginUser,
    uploadAvatar,
    resetPassword
} = require("../controller/users.controller");
const {authenticate, authorize} = require("../middleware/authenticate/authenticate");
const {uploadSingleImageDiskStore, uploadSaveStoreCloud, checkFileUploadType} = require("../middleware/upload/upload");


const UsersRouter = express.Router();

UsersRouter.get("/:id", checkExistUser, getUserDetail)
UsersRouter.post("/register", createUser);
UsersRouter.post("/login", loginUser);
UsersRouter.post("/upload-avatar", authenticate, checkFileUploadType(), uploadSaveStoreCloud, uploadAvatar);
UsersRouter.get("/", getAllUser);
UsersRouter.post("/reset-password", resetPassword);
module.exports = {
    UsersRouter
}
