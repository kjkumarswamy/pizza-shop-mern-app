const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please Enter username"],
    },
    email: {
      type: String,
      required: [true, "Please Enter email"],
      unque: true,
    },
    password: {
      type: String,
      required: [true, "Please Enter Password"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
