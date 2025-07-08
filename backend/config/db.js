const mongoose = require("mongoose");

const ConnectDB= async()=>{

await mongoose.connect('mongodb+srv://admin:admin@cluster0.tdskrt4.mongodb.net/')
  .then(() => console.log('Connected!'))
  .catch(() => console.log('Not Connected!'))
}

module.exports=ConnectDB