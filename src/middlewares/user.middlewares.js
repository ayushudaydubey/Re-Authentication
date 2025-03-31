const jwt  = require("jsonwebtoken")

module.exports.authUser = async (req,res,next) => {
 try {
  const token =  req.cookies.token || req.headers.authorization?.split(" ")[1]
  if (!token) {
    return res.status(400).json({
      message : "Unauthorized user"
    })


  }
  const decoded = jwt.verify(token,process.env.SEC_KEY)
  req.user = decoded 
  // console.log(decoded);
  next()
  
}
  

 catch (error) {
  res.status(404).json({
    message:"unauthorized user"
  })
 }
}

