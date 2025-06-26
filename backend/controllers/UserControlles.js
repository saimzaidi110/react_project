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


//for all users
let UserController = {
    getalluser:(req,res)=>{
    res.send(users)
},
//single users

getsingleuser:(req,res)=>{
    const{id}= req.params
    const user = users.find( u => u.id ==id)
 if (user) {
  res.send(user);
}
else {
  res.send({ message: "User not found" });
}
}
}
module.exports=UserController