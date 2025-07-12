const express = require("express")
const UserController = require("../controllers/UserControlles")
const router = express.Router()


///users API's
router.get('/',UserController.getalluser)

// router.get('/:id',UserController.getsingleuser)
router.post('/signup',UserController.Signup)
router.post('/login',UserController.login)
router.delete('/:id',UserController.deleteUser)

module.exports=router