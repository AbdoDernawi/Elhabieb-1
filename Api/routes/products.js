const express = require("express");
const router = express.Router();
const Products = require("../controllers/productsController");

router.get("/", Products.getProducts);
router.get("/:id", Products.getProduct);
router.post("/addProduct", Products.addProduct);
router.post("/editProduct/:id", Products.editProduct);

module.exports = router;
