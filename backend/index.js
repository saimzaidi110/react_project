const express = require("express")
const cors = require('cors');
const UserController = require("./controllers/UserControlles");
const UserRouter = require("./routes/UserRoutes")
const ProductRoutes =require("./routes/ProductRoutes")

const app = express()
app.use(cors());



//console.log(users);

//product Array
//console.log(products);

app.use("/users",UserRouter)

app.use("/products",ProductRoutes)

app.get('/',(req,res)=>{
    res.send("Server is Running")
    //console.log("Hello World")

})







const port = 3000 || 5000
app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})