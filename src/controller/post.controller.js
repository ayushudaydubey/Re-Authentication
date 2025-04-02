const postModel = require("../models/post.model")
const userModel = require("../models/user.model")

module.exports.postViewController = (req,res) =>{
  res.render("create")
}

module.exports.postCreateController = async (req, res) => {
  const { media, caption } = req.body;
  console.log(req.user); // Debugging: Check user details

  // Create a new post
  const post = await postModel.create({
    media,
    caption,
    author: req.user.id,  // Assign the logged-in user's ID as author
  });

  // Push the post's ID to the logged-in user's posts array
  await userModel.findOneAndUpdate(
    { _id: req.user.id },
    { $push: { posts: post._id } }  // Correct field name is 'posts'
  );

  // Optional: Log the user after the post is added to check
  // console.log(await userModel.findById(req.user.id));

  // Send the created post back as the response
   res.send(post);
};
