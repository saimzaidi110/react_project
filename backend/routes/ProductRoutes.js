const express = require("express");
const ProductController = require("../controllers/ProductControllers");
const router = express.Router();

router.get('/', ProductController.getallproducts);
router.get('/:id', ProductController.getsingleproduct);
router.put('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct); // 👈 added

module.exports = router;
