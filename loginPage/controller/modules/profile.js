const axios = require("axios");
const { sessions } = require("../../models/sessionModel");
const mongoose  = require("mongoose");

module.exports.profile=async(sessionId)=>{
  try 
{   
  console.log(sessionId)
  const accessToken = await sessions.findById(sessionId)

    const token=accessToken?.accessToken
    const userInfoEndpoint="https://www.googleapis.com/oauth2/v3/userinfo";

      const response = await axios.get(userInfoEndpoint, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        return response.data
  
 } 
catch (error) {
    throw error
  }

}