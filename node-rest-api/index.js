const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/user");
const warehouseRoute = require("./routes/warehouse");

dotenv.config();
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected to MongoDB");
});

app.use("/user", userRoute);
app.use("/warehouse", warehouseRoute);

app.listen(8000, () => {
  console.log("listening on 8000");
});

// jwb xác thực ng dùng cho token, id token cho mỗi ng dùng

