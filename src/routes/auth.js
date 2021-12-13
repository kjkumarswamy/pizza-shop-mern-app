const express = require("express");
const router = express.Router();
const { signup, signin, signout } = require("../controllers/auth");
const { verifyToken } = require("../middleware");

//registration
router.post("/user/signup", signup);

//login
router.post("/user/signin", signin);

//logout
router.post("/user/signout", signout);

module.exports = router;
