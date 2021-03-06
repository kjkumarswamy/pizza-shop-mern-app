const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//register
exports.signup = async (req, res) => {
  try {
    const already = await User.findOne({ email: req.body.email });
    if (already)
      return res.status(400).json({ error: "User already registered" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User registered successfully Please signin" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//signin
exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(400).json({ error: "User Name or Email is wrong" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(400).json({ error: "User Name or Email is wrong" });

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    user.password = undefined;
    res.cookie("token", token);
    res.status(200).json({ token, user });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.signout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
