// User Array
const bcrypt = require('bcrypt');

const UserSchema = require("../models/UserSchema");


                                        //for all users
let UserController = {
  getalluser: async (req, res) => {
    try {
      const users = await UserSchema.find({})
      res.json({
        message: "All users get successfully",
        status: true,
        users
      })
    } catch (error) {
      res.json({
        message: "Failed to get User",
        status: false,
        error
      })
    }
  },
                                         //single users

  // getsingleuser: (req, res) => {
  //   const { id } = req.params
  //   const user = users.find(u => u.id == id)
  //   if (user) {
  //     res.send(user);
  //   }
  //   else {
  //     res.send({ message: "User not found" });
  //   }
  // },


                                           //forsignup

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
        const hashpassword = await bcrypt.hash(password, 10)
        let user = await UserSchema({ username, email, password: hashpassword })
        await user.save()
        res.json({
          message: "SignUp Successfully",
          status: true,
          user
        });

      }

      res.send();
    }


  },

                                           //forlogin

  login: async (req, res) => {
    console.log(req.body)

    const { email, password } = req.body
    if (!email || !password) {
      res.json({
        message: "Email and password is required",
        status: false,
      });
    }
    else {
      const user = await UserSchema.findOne({ email })

      if (!user) {
        res.json({
          message: "User not found with this email",
          status: false,

        });
      }
      else {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          res.json({
            message: "Invalid password",
            status: false,
          });
        } else {
          res.json({
            message: "Login successful",
            status: true,
            user,
          });
        }
      }

    }


  },

                                           //deleteuser
  deleteUser: async (req, res) => {
    const { id } = req.params
    try {
      const user = await UserSchema.findByIdAndDelete(id)
       res.json({
            message: "User Deleted Successfully",
            status: true,
            user,
          });
    } catch (error) {
      res.json({
            message: "Failed to Delete User",
            status: false,
            error
          });
    }
    console.log(id)

    res.send()

  }
}

module.exports = UserController