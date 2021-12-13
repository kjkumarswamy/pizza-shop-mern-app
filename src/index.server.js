require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./config/db");
const morgon = require("morgan");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const pizzaRoutes = require("./routes/pizzas");
const orderRoutes = require("./routes/order");

connectDb();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(morgon("dev"));

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", pizzaRoutes);
app.use("/api", orderRoutes);

app.get("/", (req, res) => {
  res.send("hi this is working");
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
