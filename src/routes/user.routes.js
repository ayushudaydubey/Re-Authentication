const router = require("express").Router()

const userController = require("../controller/user.controller")

router.get("/",userController.homePageController)

router.get("/register",userController.registerViewController)

router.post("/register",userController.registerUserController)

router.get("/login",userController.loginViewController)

router.post("/login",userController.loginUserController)




module.exports = router
