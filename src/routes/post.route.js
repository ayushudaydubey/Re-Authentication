const postRouter = require("express").Router()
const userMiddleware = require("../middlewares/user.middlewares")

const postController = require("../controller/post.controller")

postRouter.get("/create",userMiddleware.authUser , postController.postViewController)

postRouter.post("/create", userMiddleware.authUser , postController.postCreateController)

module.exports =  postRouter 