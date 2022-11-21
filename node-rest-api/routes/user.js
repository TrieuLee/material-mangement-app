const middlewareController = require("../controllers/middlewareController");
const authController = require("../controllers/authController");

const router = require("express").Router();

// Đăng kí
router.post("/register", authController.register);

// Đăng nhập
router.post("/login", authController.login);

// Update thông tin ng dùng
router.put("/update/:id", authController.update);

// Xóa người dùng
router.delete(
  "/delete/:id",
  middlewareController.verifyTokenandAdminAuth,
  authController.delete
);
// Lấy danh sách ng dùng

router.get("/", middlewareController.verifyToken, authController.get);

// // refresh token
// router.post("/refresh", authController.requestRefreshToken)

// log out
router.post(
  "/logout",
  middlewareController.verifyToken,
  authController.userLogout
);
module.exports = router;
