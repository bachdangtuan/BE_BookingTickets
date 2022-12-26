const express = require('express');
const {checkExistUser} = require('../middleware/middleware')
const {createUser, getAllUser, getUserDetail, loginUser} = require("../controller/users.controller");


const UsersRouter = express.Router();

UsersRouter.get("/:id", checkExistUser, getUserDetail)
UsersRouter.post("/register", createUser);
UsersRouter.post("/login", loginUser);
UsersRouter.get("/", getAllUser);

module.exports = {
    UsersRouter
}