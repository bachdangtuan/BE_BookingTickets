const express = require('express');
const {checkExistUser} = require('../middleware/middleware')
const {createUser, getAllUser, getUserDetail, loginUser} = require("../controller/users.controller");
const {authenticate} = require("../middleware/authenticate/authenticate");


const UsersRouter = express.Router();

UsersRouter.get("/:id", checkExistUser, getUserDetail)
UsersRouter.post("/register", createUser);
UsersRouter.post("/login", loginUser);
UsersRouter.get("/", authenticate, getAllUser);

module.exports = {
    UsersRouter
}