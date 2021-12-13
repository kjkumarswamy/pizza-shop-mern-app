const express = require("express");
const router = express.Router();
const {
  orderPlace,
  userOrder,
  getAllOrder,
  delivered,
} = require("../controllers/order");
const { verifyToken } = require("../middleware");

router.post("/orders/placeorder", verifyToken, orderPlace);

router.get("/orders/getuserorder", verifyToken, userOrder);

router.get("/orders/getallorder", verifyToken, getAllOrder);

router.post("/orders/delivered", verifyToken, delivered);

module.exports = router;
