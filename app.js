const express = require("express");
const productsRoutes = require("./apis/products/routes");
const connectDB = require("./db/database");
const morgan = require("morgan");

const app = express();

//Allows our app to access the body of the request
app.use(express.json());

app.use(morgan("dev"))
app.use("/api/products", productsRoutes);



// app.use((req, res, next) => {
//   console.log(`${req.method} `)
//   next()
// })


app.use((req, res, next) => {
  const err = new Error("Not Found");
  res.status(404);
  res.json({
    error: {
      message: err.message,
    },
  });
  next()
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message || "Internal Server Error",
    },
  });
});



connectDB();
const port = 8000;
app.listen(port, () => {
  console.log(`The application is running on localhost:${port}`);
});

