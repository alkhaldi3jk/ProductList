const express = require("express");
const productsRoutes = require("./apis/products/routes");
const connectDB = require("./db/database");

const app = express();

//Allows our app to access the body of the request
app.use(express.json());
app.use("/api/products", productsRoutes);

const port = 8000;


connectDB();
app.listen(port, () => {
  console.log(`The application is running on localhost:${port}`);
});
