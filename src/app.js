const express  = require("express")
const app = express();
const dotenv = require("dotenv")
dotenv.config()
const userRouter  = require("./routes/user.routes");
const cookieParser = require("cookie-parser");


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser())

app.set("view engine","ejs")



app.use("/user",userRouter)
module.exports = app