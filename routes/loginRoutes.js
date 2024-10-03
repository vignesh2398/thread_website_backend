const express = require('express');
const { loginPage, authrolizationUrl,token } = require('../loginPage/controller/loginPage');
const router = express.Router();

router.get("/loginpage",loginPage)
router.get("/authorizationUrl",authrolizationUrl)
router.post("/token",token)

module.exports=router