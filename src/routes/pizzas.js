const express = require("express");
const router = express.Router();
const {
  getPizzas,
  addPizzas,
  updatePizza,
  deletePizza,
  getPizzaById,
} = require("../controllers/pizza");
const { verifyToken } = require("../middleware");

//Add Pizza
router.post("/pizzas/addpizzas", verifyToken, addPizzas);

//Get all Pizzas
router.get("/pizzas/getpizzas", getPizzas);

//get pizza byid
router.get("/pizzas/getpizzabyid/:id", verifyToken, getPizzaById);

//update pizza
router.put("/pizza/update", verifyToken, updatePizza);

//delete
router.delete("/pizza/delete/:id", verifyToken, deletePizza);

module.exports = router;
