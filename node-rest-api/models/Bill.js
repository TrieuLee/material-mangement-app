const mongoose = require("mongoose");
const BillChema = new mongoose.Schema({
  supplier_id: {
    type: String,
    required: true,
    unique: true,
  },
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    required: true,
  },
  state: {
    type: Boolean,
    default: true,
  },
});
module.exports = mongoose.model("Bill", BillChema);
