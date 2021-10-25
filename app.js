
const { response } = require("express");
const express = require("express");
const products = require ("./products")
const app = express();

//Allows our app to access the body of the request
app.use(express.json())

  app.post("/api/products", (req, res) => {
     console.log("posting",req.body)
    res.json(products);
   
  });

  app.delete("/api/products/:productId", (req, res) => {
    console.log("deleting", req.params.productId)

    const delProduct= products.find(product=> product.id === +req.params.productId)
    res.json(delProduct);
  
    
 });


const port=8000;

app.listen(port, () => {
    console.log(`The application is running on localhost:${port}`);
  });




