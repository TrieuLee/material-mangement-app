const mongoose = require("mongoose");
const Warehouse = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  detail: {
    type: String,
    required: true,
  },
  state: {
    type: Boolean,
    default: true,
  },
});
module.exports = mongoose.model("Warehouse", Warehouse);
