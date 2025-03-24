const postRouter = require("express").Router()

const postController = require("../controller/post.controller")

postRouter.get("/create",postController.postViewController)

postRouter.post("/create",postController.postCreateController)

module.exports =  postRouter