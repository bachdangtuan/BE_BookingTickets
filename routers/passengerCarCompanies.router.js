const express = require('express');
const {
    createCompany,
    getAllCompanies,
    getDetailCompanies,
    uploadAvatarCompany
} = require("../controller/companies.controller");
const {uploadSaveStoreCloud, checkFileUploadType} = require("../middleware/upload/upload");


const passengerCompaniesRouter = express.Router();


passengerCompaniesRouter.post("/create-company", checkFileUploadType(), uploadSaveStoreCloud, createCompany);
passengerCompaniesRouter.get("/list-company", getAllCompanies);
passengerCompaniesRouter.get("/:id", getDetailCompanies);
// passengerCompaniesRouter.post("/upload-avatar-company", checkFileUploadType(), uploadSaveStoreCloud, uploadAvatarCompany);


module.exports = {
    passengerCompaniesRouter,
}
