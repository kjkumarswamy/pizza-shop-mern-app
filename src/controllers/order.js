const Order = require("../models/Order");
const shortid = require("shortid");
const stripe = require("stripe")(
  "sk_test_51Jz1vVSBVzTgryF8QIVJuOWePc83fExkmCMjeftlB98nyRHL09PH6GG9HOwueGXrywUlTf8NcegAmeyIHhNKK9pL00gcmT0Nbp"
);

exports.orderPlace = async (req, res) => {
  const { token, subTotal, currentUser, cartItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: subTotal * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: shortid.generate(),
      }
    );

    if (payment) {
      const newOrder = new Order({
        name: currentUser.username,
        email: currentUser.email,
        userId: currentUser._id,
        orderItems: cartItems,
        orderAmount: subTotal,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.country,
          city: token.card.address_city,
          pincode: token.card.address_zip,
        },
        transactionId: payment.source.id,
      });
      await newOrder.save();
      res.status(200).json({ message: "Payment success" });
    } else {
      res.status(400).json({ error: "Payment failed" });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.userOrder = async (req, res) => {
  try {
    const order = await Order.find({ userId: req.user._id }).sort({
      _id: "-1",
    });
    res.status(200).json({ order });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.getAllOrder = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).json({ orders });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.delivered = async (req, res) => {
  try {
    await Order.findByIdAndUpdate(
      req.body.id,
      { $set: { isDelivered: true } },
      { new: true }
    );
    res.status(200).json({ message: "Delivered" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
