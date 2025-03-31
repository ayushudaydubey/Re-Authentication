const router = require("express").Router()

const userController = require("../controller/user.controller")
const userMiddleware = require("../middlewares/user.middlewares")

router.get("/",userController.homePageController)

router.get("/register",userController.registerViewController)

router.post("/register",userController.registerUserController)

router.get("/login",userController.loginViewController)

router.post("/login",userController.loginUserController)

router.post("/logout",userController.logoutController);



router.get("/feed",userMiddleware.authUser,userController.feedViewController)



module.exports = router
