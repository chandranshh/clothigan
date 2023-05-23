const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Users = require("../../../models/Users");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const jwt_secret = process.env.JWT_SECRET;

router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await Users.findById(userId);

    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    } else {
      return res.status(200).json({ user });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.put("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(400).json({ error: "No user ID received" });
    }

    const { email, password, profilePicture, phone, address, address2 } =
      req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const updatedUser = await Users.findOneAndUpdate(
      { _id: userId },
      {
        $set: {
          email: email || undefined,
          password: password ? hashedPassword : undefined,
          profilePicture: profilePicture || undefined,
          phone: phone || undefined,
          address: address || undefined,
          address2: address2 || undefined,
        },
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(400).json({ error: "User does not exist" });
    }

    const token = jwt.sign(
      { id: updatedUser._id, email: updatedUser.email },
      jwt_secret,
      { expiresIn: 86000 }
    );

    updatedUser.token = token;
    await updatedUser.save();

    return res
      .cookie("token", token)
      .status(200)
      .json({
        token,
        user: { id: updatedUser._id, email: updatedUser.email },
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
