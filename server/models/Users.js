const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
      match: /^\d{10}$/, // Matches a 10-digit phone number format
    },
    address: {
      type: String,
      default: "",
    },
    address2: {
      type: String,
      default: "",
    },
    token: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", userSchema); // Use singular "User" for the model name

module.exports = Users;
