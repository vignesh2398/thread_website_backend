const dotenv = require("dotenv");
const { token } = require("./modules/access_token");
const { sessions } = require("../models/sessionModel");
dotenv.config();
module.exports.loginPage = (req, res, next) => {
  try {
  } catch (error) {
    error.status ??= 400;
    next(error);
  }
};
module.exports.authrolizationUrl = (req, res, next) => {
  try {
    const email = req.query.email;
    res.status(200).send({
      message: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.CLIENT_ID}&redirect_uri=http://localhost:3000/login&response_type=code&scope=email%20profile&access_type=offline&login_hint=${email}
`,
    });
  } catch (error) {
    error.status ??= 400;
    next(error);
  }
};
module.exports.token = async (req, res, next) => {
  try {
    const code = req.body?.code;

    const data = await token(code);
    if(true)
    {
      const session= await sessions.create({accessToken:data.access_token})
       res.cookie("sessionId", session.id, {
        domain:"localhost",
        httpOnly: true,  // Prevents the client-side JavaScript from accessing the cookie
        secure: true,    // Ensures the cookie is only sent over HTTPS
        maxAge: 24 * 60 * 60 * 1000,  // Cookie expires in 1 day
      })
    }
    console.log(req.cookies,"this is cookes")
    res.status(200).send({ message: data });
  } catch (error) {
    error.status ??= 400;
    next(error);
  }
};
