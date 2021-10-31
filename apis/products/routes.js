const express = require("express");
const {
  productListFetch,
  productListCreate,
  productListDelete,
  productListUpdate,
  fetchProduct,
} = require("./controllers");
const router = express.Router();

router.param("productId", async (req, res, next, productId) => {
  //we saved product in a function Called fetchProduct in controllers
  // const product = await product.findById(productId);

  const product = await fetchProduct(productId, next);
  if (product) {
    req.product = product;
    next();
  } else {
    const error = new Error("Not Found ");
    error.status = 404;
    next(error);
  }
});

express.Router();
router.get("/", productListFetch);

router.post("/", productListCreate);

router.delete("/:productId", productListDelete);
router.put("/:productId", productListUpdate);

module.exports = router;
