const express = require("express")
const UserController = require("../controllers/UserControlles")
const router = express.Router()


///users API's
router.get('/',UserController.getalluser)

router.get('/:id',UserController.getsingleuser)
router.post('/login',UserController.LoginUser)
router.post('/signup',UserController.Signup)

module.exports=router