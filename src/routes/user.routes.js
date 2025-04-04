const router = require("express").Router()

const userController = require("../controller/user.controller")
const userMiddleware = require("../middlewares/user.middlewares")
const upload = require("../../config/multer.config");
router.get("/",userController.homePageController)

router.get("/register",userController.registerViewController)

router.post("/register",upload.single("profileImage"),userController.registerUserController)
router.get("/feed" ,userMiddleware.authUser,userController.feedViewController)

router.get("/login",userController.loginViewController)

router.post("/login",userController.loginUserController)

router.get("/logout",userController.logoutController);




module.exports = router
