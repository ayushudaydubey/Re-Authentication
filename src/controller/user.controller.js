const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt  = require("jsonwebtoken")
const cookieParser = require("cookie-parser")


module.exports.homePageController = (req,res) =>{
res.send("home page")
}

module.exports.registerViewController = (req,res)=>{
  res.render("register")
}

module.exports.registerUserController = async (req,res) => {
   const {username,email,profileImage,password} = req.body

  const hashPassword = await bcrypt.hash(password, 10)

  const user =  await userModel.create({
    username,
    email,
    profileImage,
    password:hashPassword
  })

  const token = jwt.sign({
    id:user._id,
    email:user.email

  },process.env.SEC_KEY)



  res.cookie("token",token)

  res.status(201).json({
    user,token
  })
  


}