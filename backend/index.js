const express = require("express")

const app = express()

// User Array

const users = [
  { id: 1, name: "Rahul Kumar", email: "rahul.kumar@example.com" },
  { id: 2, name: "Sneha Sharma", email: "sneha.sharma@example.com" },
  { id: 3, name: "Amit Verma", email: "amit.verma@example.com" },
  { id: 4, name: "Pooja Singh", email: "pooja.singh@example.com" },
  { id: 5, name: "Vikram Patel", email: "vikram.patel@example.com" },
  { id: 6, name: "Anjali Mehta", email: "anjali.mehta@example.com" },
  { id: 7, name: "Suresh Yadav", email: "suresh.yadav@example.com" },
  { id: 8, name: "Neha Gupta", email: "neha.gupta@example.com" },
  { id: 9, name: "Rohit Das", email: "rohit.das@example.com" },
  { id: 10, name: "Kavita Joshi", email: "kavita.joshi@example.com" }
];

//console.log(users);

//product Array

const products = [
  { id: 1, name: "Mobile Phone", price: 15000, category: "Electronics" },
  { id: 2, name: "Laptop", price: 45000, category: "Electronics" },
  { id: 3, name: "T-shirt", price: 500, category: "Clothing" },
  { id: 4, name: "Jeans", price: 1200, category: "Clothing" },
  { id: 5, name: "Wrist Watch", price: 3500, category: "Accessories" },
  { id: 6, name: "Sunglasses", price: 2500, category: "Accessories" },
  { id: 7, name: "Microwave Oven", price: 7000, category: "Home Appliances" },
  { id: 8, name: "Refrigerator", price: 25000, category: "Home Appliances" },
  { id: 9, name: "Sneakers", price: 1800, category: "Footwear" },
  { id: 10, name: "Backpack", price: 900, category: "Accessories" }
];

//console.log(products);



app.get('/',(req,res)=>{
    res.send("Server is Running")
    //console.log("Hello World")

})
///users API's
app.get('/users',(req,res)=>{
    res.send(users)
})

app.get('/users/:id',(req,res)=>{
    const{id}= req.params
    const user = users.find( u => u.id ==id)
 if (user) {
  res.send(user);
}
else {
  res.send({ message: "User not found" });
}
})
//Product API's
app.get('/products',(req,res)=>{
    res.send(products)
})

app.get('/products/:id',(req,res)=>{
    const{id}= req.params
    const product = products.find(pro => pro.id ==id)
    if(product){
         res.send(product);
        
    }
    else{
        res.send("Product not available");
    }
   
})

const port = 3000 || 5000
app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})