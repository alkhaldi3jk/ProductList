const express = require("express");
const productsRoutes = require("./apis/products/routes");

const app = express();

//Allows our app to access the body of the request
app.use(express.json());
app.use("/api/products", productsRoutes);

const port = 8000;

app.listen(port, () => {
  console.log(`The application is running on localhost:${port}`);
});
