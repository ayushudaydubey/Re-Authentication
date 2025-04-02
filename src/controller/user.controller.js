const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const postModel = require("../models/post.model")


module.exports.homePageController = (req, res) => {
  res.send("home page")
}

module.exports.registerViewController = (req, res) => {
  res.render("register")
}

module.exports.registerUserController = async (req, res) => {
  const { username, email, profileImage, password } = req.body

  const hashPassword = await bcrypt.hash(password, 10)

  const user = await userModel.create({
    username,
    email,
    profileImage,
    password: hashPassword
  })

  const token = jwt.sign({
    id: user._id,
    email: user.email

  }, process.env.SEC_KEY)



  res.cookie("token", token)

  res.status(201).json({
    user, token
  })

}

module.exports.loginViewController = (req, res) => {
  res.render("login")

}
module.exports.loginUserController = async (req, res) => {

  const { email, password } = req.body

  const user = await userModel.findOne({
    email
  })
  if (!user) {
    return res.status(400).json({
      message: "user Not found "
    })

  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    return res.status(400).json({
      mesaage: "Password not match"
    })
  }

  const token = jwt.sign({ id: user._id, email: user.email }, process.env.SEC_KEY)

  res.cookie("token", token)

  res.status(200).json({
    mesaage: 'user login suceessfully',
    user,
    token
  })
}

// logout route.................

module.exports.logoutController = async (req, res) => {

  res.cookie("token", "")
  res.redirect("/user/login");
};

module.exports.feedViewController = async (req, res) => {
  const user = await userModel.findById(req.user.id).populate("posts"); // Use populate to get the actual posts
  const post = await postModel.find({ author: req.user._id }); // This retrieves the posts of the logged-in user

  res.render("feed", { user, post }); // Make sure user and post are being passed correctly
};
