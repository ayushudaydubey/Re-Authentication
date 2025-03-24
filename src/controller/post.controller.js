const postModel = require("../models/post.model")

module.exports.postViewController = (req,res) =>{
  res.render("create-post")
}

module.exports.postCreateController = async (req,res) => {
  const {media,caption} = req.body
  
  const post = await postModel.create({
    media,
    caption

  })

  // remaing part create post by userName 

res,send(post)
}