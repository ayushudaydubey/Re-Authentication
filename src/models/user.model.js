const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
  {
    username:{
      type:String
    },
    email:{
      type:String
    
    },
    profileImage:{
      type:String,
      default:"https://unsplash.com/photos/a-person-holding-a-bouquet-of-pink-roses-36DiB9aswvU"
      
    },

    password:{
    type:String
    },

    posts:[{
   type:mongoose.Schema.Types.ObjectId,  // ._id of  post database of  multiple user stored in array
   ref:"post"
    }]

  }
)
const userModel = mongoose.model("user",userSchema)

module.exports = userModel