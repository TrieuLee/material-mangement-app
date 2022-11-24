const express = require("express");
const app = express();
const multer = require("multer");
const loaders = require("./loaders");
const userRoute = require("./routes/users");
const { PORT } = require("./config/index");

(async () => {
  await loaders(app);
  app.use("/api/users", userRoute);
  // set up router
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
})();
