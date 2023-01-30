// config dotenv for can read the .env file property
require("dotenv").config();
const express = require("express");

// create express app
const app = express();

// get .env file property
const { PORT } = process.env;

// base routes
app.get("/", (req, res) => {
  res.json({ message: "welcome to the website" });
});

// app listener request
app.listen(PORT, () => console.log(`The server run on port: ${PORT}.\nYou can see the result on http://localhost:${PORT}/`));
