const express = require('express');
const {createCompany, getAllCompanies} = require("../controller/companies.controller");
const {uploadSaveStoreCloud, checkFileUploadType} = require("../middleware/upload/upload");


const passengerCompaniesRouter = express.Router();


passengerCompaniesRouter.post("/create-company", createCompany);
passengerCompaniesRouter.get("/list-company", getAllCompanies);
passengerCompaniesRouter.post("/upload-avatar-company", checkFileUploadType(), uploadSaveStoreCloud);





module.exports = {
    passengerCompaniesRouter,
}