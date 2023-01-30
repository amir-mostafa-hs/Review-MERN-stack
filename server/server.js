// config dotenv for can read the .env file property
require("dotenv").config();
const express = require("express");

// create express app
const app = express();

// use express json middleware
app.use(express.json());

// get .env file property
const { PORT } = process.env;

// get todo routes
const todoRoutes = require("./routers/todo.routes");

// base routes
app.get("/", (req, res) => {
  res.json({ message: "welcome to the server app" });
});
app.use("/api/v1", todoRoutes);

// app listener request
app.listen(PORT, () => console.log(`The server run on port: ${PORT}.\nYou can see the result on http://localhost:${PORT}/`));
