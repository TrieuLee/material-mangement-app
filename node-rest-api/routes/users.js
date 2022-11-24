const router = require("express").Router();

const authController = require("../controllers/authController");

router.get("/", authController.get);

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.put("/:id", authController.update);
router.delete("/:id", authController.delete);
module.exports = router;