require("dotenv").config();
const Pizza = require("../models/pizza-data");
const Pizzas = require("./pizza-data");
const connectDb = require("../config/db");

connectDb();

const importData = async () => {
  try {
    await Pizza.deleteMany();
    console.log("Pizzas");
    const sampleData = Pizzas.map((pizza) => {
      return { ...pizza };
    });
    await Pizza.insertMany(sampleData);
    console.log("Data imported");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

const dataDestroy = () => {};

if (process.argv[2] === "-d") {
  dataDestroy();
} else {
  importData();
  console.log("Hi");
}
