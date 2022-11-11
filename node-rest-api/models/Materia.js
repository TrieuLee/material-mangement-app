const mongoose = require("mongoose");
const MateriaSchema = new mongoose.Schema({
  warehouse_id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  unit: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("Materia", MateriaSchema);
