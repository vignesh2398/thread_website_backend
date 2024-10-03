const dotenv = require("dotenv");
const { token } = require("./modules/access_token");
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
    const code = req.body.code;
    const data = await token(code);
    res.status(200).send({ message: data });
  } catch (error) {
    error.status ??= 400;
    next(error);
  }
};
