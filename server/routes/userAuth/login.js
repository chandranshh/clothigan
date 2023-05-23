const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Users = require("../../models/Users");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const jwt_secret = process.env.JWT_SECRET;

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
        jwt.sign(
          {
            id: findUser._id,
            email: findUser.email,
          },
          jwt_secret,
          { expiresIn: 86000 },
          (err, token) => {
            if (err) {
              console.error(err);
              return res.status(500).json({ error: "Server error" });
            }
            findUser.token = token;
            findUser.save();
            return res
              .cookie("token", token)
              .status(200)
              .json({
                token,
                user: {
                  id: findUser._id,
                  email: findUser.email,
                },
              });
          }
        );
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
