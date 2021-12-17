require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./config/db");
const path = require("path");
const morgon = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT;
connectDb();

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const pizzaRoutes = require("./routes/pizzas");
const orderRoutes = require("./routes/order");

app.use(cors());
app.use(express.json());
app.use(morgon("dev"));

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", pizzaRoutes);
app.use("/api", orderRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Hi this si working");
  });
}

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
