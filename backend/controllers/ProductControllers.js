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

//AllProducts

let ProductController={
    getallproducts:(req,res)=>{
    res.send(products)
},

//For Single Product
getsingleproduct:(req,res)=>{
    const{id}= req.params
    const product = products.find(pro => pro.id ==id)
    if(product){
         res.send(product);
        
    }
    else{
        res.send("Product not available");
    }
   
}

}

module.exports =ProductController