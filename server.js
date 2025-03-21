const  connect  = require("./src/db/db");
const app = require("./src/app");

app.listen(process.env.PORT,()=>{
  connect()
  console.log("Server staring on your localhost");
  
})