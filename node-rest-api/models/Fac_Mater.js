const mongoose = require("mongoose");
const Fac_Mar = new mongoose.Schema({
  factory_id: {
    type: String,
    required: true,
    unique: true,
  },
  materia_id: {
    type: String,
    required: true,
    unique: true,
  },
});
module.exports = mongoose.model("Fac_Mar", Fac_Mar);
