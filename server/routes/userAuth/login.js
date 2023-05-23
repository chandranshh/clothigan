const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Users = require("../../models/Users");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const findUser = await Users.findOne({ email });
    if (findUser === null) {
      return res.status(400).json({ error: "User does not exist" });
    } else {
      const isMatch = await bcrypt.compare(password, findUser.password);
      if (!isMatch) {
        return res.status(400).json({ error: "Invalid credentials" });
      } else {
        res.status(200).json(findUser);
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
