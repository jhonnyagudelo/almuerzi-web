const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Orders = mongoose.model(
  "Order",
  new Schema({
    meal_id: {
      type: Schema.Type.ObjectId,
      ref: "Meal",
    },
    user_id: String,
  })
);

module.exports = Orders;
