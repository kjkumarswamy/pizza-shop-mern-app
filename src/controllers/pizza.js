const Pizza = require("../models/pizza-data");

//Add Pizzas
exports.addPizzas = async (req, res) => {
  const { pizza } = req.body;
  try {
    const newPizza = new Pizza({
      name: pizza.name,
      varients: ["small", "medium", "large"],
      prices: [pizza.prices],
      category: pizza.category,
      image: pizza.image,
      description: pizza.desc,
    });
    await newPizza.save();
    res.status(201).json({ message: "Pizza added successfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//Get Pizzas
exports.getPizzas = async (req, res) => {
  try {
    const pizzas = await Pizza.find({});
    res.status(200).json({ pizzas });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//get Pizza by Id
exports.getPizzaById = async (req, res) => {
  try {
    console.log(req.params.id);
    const pizza = await Pizza.findById(req.params.id);
    res.status(200).json({ pizza });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//update pizza
exports.updatePizza = async (req, res) => {
  try {
    await Pizza.findByIdAndUpdate(
      req.body.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({ message: "Updated" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//delete pizza
exports.deletePizza = async (req, res) => {
  try {
    await Pizza.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Pizza Deleted" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
