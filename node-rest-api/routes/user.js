const authController = require("../controllers/userController");

const router = require("express").Router();

router.post("/register", authController.register);

router.post("/login", authController.login);
router.put("/update/:id", authController.update);
router.delete("/delete/:id", authController.delete);
router.get("/", authController.get);

module.exports = router;
