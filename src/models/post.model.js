const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
  media:{
    type:String
  },
  caption:{
    type:String
  },
  author: { type: mongoose.Schema.Types.ObjectId,
     ref: 'user' }     //  ._id of user data base 
})

const postModel  = mongoose.model("post",postSchema)

module.exports = postModel