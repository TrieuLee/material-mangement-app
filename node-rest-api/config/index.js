require("dotenv").config();

module.exports = {
  DATABASE: {
    DB_URI: process.env.MONGGO_URL,
  },
  PORT: process.env.PORT || 8000,
  JWT_SECRET: process.env.JWT_SECRET,
};
