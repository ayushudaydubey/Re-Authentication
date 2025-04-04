const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.route");
const cookieParser = require("cookie-parser");
const multerConfig = require("../config/multer.config"); // Fixed typo
const path = require("path");

app.use(express.static("public"));

// console.log("Static folder path:", path.join(__dirname, "public"));

// const fs = require("fs");
// console.log("File exists?", fs.existsSync(path.join(__dirname,"public/images/uploads/image.png")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set("view engine", "ejs");

app.use("/post", postRouter);
app.use("/user", userRouter);

module.exports = app;