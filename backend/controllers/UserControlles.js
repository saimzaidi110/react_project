// User Array
const bcrypt = require('bcrypt');

const UserSchema = require("../models/UserSchema");

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
  getalluser: (req, res) => {
    res.send(users)
  },
  //single users

  getsingleuser: (req, res) => {
    const { id } = req.params
    const user = users.find(u => u.id == id)
    if (user) {
      res.send(user);
    }
    else {
      res.send({ message: "User not found" });
    }
  },

  //loginuser

  LoginUser: async (req, res) => {

  },

  Signup: async (req, res) => {
    console.log(req.body)

    const { username, email, password } = req.body
    if (!username || !email || !password) {
      res.json({
        message: "required fields are missing",
        status: false,
      });
    }
    else {
      const existinguser = await UserSchema.findOne({ email })

      if (existinguser) {
        res.json({
          message: "User is already exist with this email",
        status: false,

        });
      }
      else {
        const hashpassword=await bcrypt.hash(password,10)
        let user = await UserSchema({ username, email, password:hashpassword })
        await user.save()
        res.json({
          message: "SignUp Successfully",
        status: true,
        user
        });

      }

      res.send();
    }


  }
}

module.exports = UserController