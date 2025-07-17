const express = require("express")
const UserController = require("../controllers/UserControlles") // double-check the filename spelling
const router = express.Router()

// users API's
router.get('/', UserController.getalluser)
router.post('/signup', UserController.Signup)
router.post('/login', UserController.login)
router.delete('/:id', UserController.deleteUser)

// ✅ ADD THIS LINE
router.put('/:id', UserController.updateUser)




module.exports = router
