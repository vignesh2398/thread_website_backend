module.exports.loginPage=(req,res,next)=>{
    try {
        console.log(req)
        res.sendffd("asdad") 
    } catch (error) {
        error.status??=400;
        next(error)
    }
 
}