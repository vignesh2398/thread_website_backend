const {  profile } = require("./modules/profile")

module.exports.profile=async(req,res,next)=>{
    try {
        const data=await profile(req.cookies.sessionId);
        res.status(200).send({message:data})
    } catch (error) {
        next(error)
    }
}