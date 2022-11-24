// khi ng dùng muốn làm gì , phải xác thực ng dùng đó đúng với token, middleware

const jwt = require("jsonwebtoken");

const middlewareController = {
  // verifyToken:xác nhận token
  verifyToken: (req, res, next) => {
    const token = req.headers.token;
    if (token) {
      // Bearer [123456]
      const accessToken = token.split(" ")[1];
      jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
        if (err) {
          // lỗi: ko phải ng dùng, hoặc token hế hạn
          res.status(403).json("Token is not valid");
        }
        req.user = user;
        // nếu đúng thì tiếp tuc next()
        next();
      });
    } else {
      res.status(401).json("Chưa đăng kí tài khoản");
    }
  },
  verifyTokenandAdminAuth: (req, res, next) => {
    // sử dụng lại
    middlewareController.verifyToken(req, res, () => {
      if (req.user.id == req.params.id || req.user.role) {
        next();
      } else {
        res.status(403).json("Bạn không có quyền xóa tài khoản");
      }
      console.log(req.user);
    });
  },
};

module.exports = middlewareController;
