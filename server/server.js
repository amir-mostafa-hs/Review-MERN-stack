// config dotenv for can read the .env file property
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// create express app
const app = express();

// use express json middleware
app.use(express.json());

// get .env file property
const { PORT, MONGO_URI } = process.env;

// get todo routes
const todoRoutes = require("./routers/todo.routes");

// base routes
app.get("/", (req, res) => {
  res.json({ message: "welcome to the server app" });
});
app.use("/api/v1", todoRoutes);

// try to connect to mongoDB database
mongoose
  .connect(MONGO_URI)
  .then((result) => {
    console.log("connection to database is successfully");
  })
  .catch((error) => console.error(error));

// app listener request
app.listen(PORT, () => console.log(`The server run on port: ${PORT}.\nYou can see the result on http://localhost:${PORT}/`));
