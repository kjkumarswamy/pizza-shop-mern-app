const express = require("express");
const router = express.Router();
const { allusers, deleteUser } = require("../controllers/user");
const { verifyToken } = require("../middleware");

//get all users
router.get("/user/allusers", verifyToken, allusers);

//delete users
router.delete("/user/delete/:id", verifyToken, deleteUser);

module.exports = router;
