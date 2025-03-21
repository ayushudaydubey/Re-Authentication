const mongoose  = require("mongoose")

function connect() {
  mongoose.connect(process.env.MONGO_DB_URI)
  .then(()=>{
    console.log("Database connected with server");
    
  })
  .catch((err)=>{
     console.log("Some problem in DB to connect with server",err);
     
  })
}
module.exports = connect