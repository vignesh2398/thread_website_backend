const express = require('express');
const { loginPage } = require('../loginPage/controller/loginPage');
const router = express.Router();

router.get("/loginpage",loginPage)

module.exports=router