const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//import routes
const handleRegister = require("./routes/users/userAuth/register");
const handleLogin = require("./routes/users/userAuth/login");
const handleUserData = require("./routes/userData/userData");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

dotenv.config();

//test
app.get(`/`, (req, res) => {
  res.send("API is working");
});

// Connect to MongoDB
require("./connection");

// Routes

// Register
app.use("/auth/register", handleRegister);
app.use("/auth/login", handleLogin);
app.use("/user", handleUserData);

//port listening
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
