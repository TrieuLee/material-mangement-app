const mongoose = require("mongoose");

const SupplierSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 6,
      maxLength: 20,
      unique: true,
    },
    address: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 50,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      minLength: 6,
    },
  },
  { timestramp: true }
);

module.exports = mongoose.model("Supplier", SupplierSchema);
