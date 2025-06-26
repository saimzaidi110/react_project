const express =require("express")
const ProductController = require("../controllers/ProductControllers")
const router = express.Router()


//Product API's
router.get('/',ProductController.getallproducts)

router.get('/:id',ProductController.getsingleproduct)

module.exports=router