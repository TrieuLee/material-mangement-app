const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");

dotenv.config();
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected to MongoDB");
});

app.use("/v1/auth", authRoute);

app.listen(8000, () => {
  console.log("listening on 8000");
});
