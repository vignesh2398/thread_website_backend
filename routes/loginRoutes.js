const express = require('express');
const { loginPage, authrolizationUrl,token } = require('../loginPage/controller/loginPage');
const { profile } = require('../loginPage/controller/profile');
const router = express.Router();

router.get("/loginpage",loginPage)
router.get("/authorizationUrl",authrolizationUrl)
router.post("/token",token)
router.get("/profile",profile)

module.exports=router