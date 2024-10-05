const  mongoose  = require("mongoose");

const session = new mongoose.Schema({
    refreshToken: String,
    accessToken:String,

  },{ timestamps: true });

  module.exports.sessions = mongoose.model('sessions', session);