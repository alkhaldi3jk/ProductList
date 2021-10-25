const { res } = require("express");
const express = require("express");
const { productListCreate, productListDelete } = require("./controllers");
const router = express.Router();

express.Router();

router.post("/", productListCreate);

router.delete("/:productId", productListDelete);

module.exports = router;
