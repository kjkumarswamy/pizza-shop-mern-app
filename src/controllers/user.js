const User = require("../models/User");

//get all users
exports.allusers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//delete user
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
