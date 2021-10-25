let products = require ("../../products")




const productListCreate=  (req, res) => {
    console.log("posting",req.body)
   products.push(req.body)
   res.status(201).json(req.body)
 }

 const productListDelete=(req, res) => {
    console.log("deleting", req.params.productId);
    const productId = req.params.productId;
    const product = products.find((product) => product.id === +productId);
    if (product) {
      products = products.filter((product) => product.id !== +productId);
      res.status(204);
      return res.end();
    } else {
      return res.status(404).json({ message: "not found" });
    }
  }

 module.exports = {productListCreate,productListDelete} 