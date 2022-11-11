const mongoose = require("mongoose");
const factorySchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
module.exports = mongoose.model("Factory", factorySchema);
