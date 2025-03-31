const postModel = require("../models/post.model")
const userModel = require("../models/user.model")

module.exports.postViewController = (req,res) =>{
  res.render("create")
}

module.exports.postCreateController = async (req,res) => {
  const {media,caption} = req.body
  
  const post = await postModel.create({
    media,
    caption,
    author:req.users.id


  })

  await userModel.findOneAndUpdate({
    
  _id:req.user.id

  },{
    $push:{
      post:post

    }
  })

  // remaing part create post by userName 

res.send(post)
}