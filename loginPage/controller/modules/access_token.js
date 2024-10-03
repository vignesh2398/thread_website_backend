const { default: axios } = require('axios');
const qs = require('qs');
module.exports.token = async (code) => {
  try {
    const googleClientId = process.env.CLIENT_ID;
    const googleClientSecret = process.env.Client_secret;
    const redirectUri = "http://localhost:3000/login";
    console.log(googleClientSecret)
    const tokenResponse = await axios.post(
      "https://oauth2.googleapis.com/token",
      qs.stringify({
        code: `${code}&scope=email+profile+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&authuser=0&prompt=consent`,
        client_id: googleClientId,
        client_secret: googleClientSecret,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const { access_token, refresh_token, id_token, expires_in } =tokenResponse.data;
    return tokenResponse.data;
  } catch (error) {
    throw error;
  }
};
