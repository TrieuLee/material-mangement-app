const mongoose = require("mongoose");
const BillDetailChema = new mongoose.Schema({
  materia_id: {
    type: String,
    required: true,
    unique: true,
  },
  bill_id: {
    type: String,
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  price: {
    type: Number,
    default: true,
    default: 1,
  },
});
module.exports = mongoose.model("BillDetail", BillDetailChema);
