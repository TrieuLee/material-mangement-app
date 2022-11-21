const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authController = {
  async register(req, res) {
    try {
      // generate the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      // create new user
      const newUser = await new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });
      // save user and respond
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Khởi tạo accessToken
  generateAccessToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      // access token là sử dụng ngắn hạn
      process.env.JWT_ACCESS_KEY,
      // hết hạn token
      { expiresIn: "2h" }
    );
  },
  // Khởi tạo refreshToken
  generateRefreshToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      // refesh token là sử dụng dài hạn, dự trữ trường hợp bị bay acc
      process.env.JWT_REFRESH_KEY,
      // hết hạn token
      { expiresIn: "365d" }
    );
  },
  // Đăng nhập
  async login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(404).json("Tài khoản hoặc mật khẩu sai!");
      }

      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword)
        return res.status(400).json("Tài khoản hoặc mật khẩu sai!");
      if (user && validPassword) {
        const accessToken = authController.generateAccessToken(user);
        const refeshToken = authController.generateRefreshToken(user);
        // http only cookie để lưu refresh
        res.cookie("refreshToken", refeshToken, {
          httpOnly: true,
          secure: true,
          path: "/",
          sameSite: "strict",
        });
        // khi đã lưu vào cookie thì ko cần trả về thg fe
        res.status(200).json({ user, accessToken });
      }
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  },
  // // refresh token
  // requestRefreshToken: async (req, res) => {
  //   // Lấy refreshtoken từ user, tận dụng dài hạn để tạo lại token mới
  //   const refreshToken = req.cookies.refreshToken;
  //   if (!refreshToken) return res.status(401).json("Bạn chưa đăng nhập ");
  //   jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     // Tạo mới rt, at
  //     const newAccessToken = auth.generateAccessToken(user);
  //     const newRefreshToken = auth.generateRefreshToken(user);
  //     res.cookie("refreshToken", newRefreshToken, {
  //       httpOnly: true,
  //       secure: true,
  //       path: "/",
  //       sameSite: "strict",
  //     });
  //     res.status(200).json({ accessToken: newAccessToken });
  //   });
  // },
  async update(req, res) {
    if (req.body.userId === req.params.id) {
      if (req.body.password) {
        try {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(req.body.password, salt);
        } catch (err) {
          return res.status(500).json(err);
        }
      }
      try {
        await User.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        });
        res.status(200).json("Bạn đã cập nhập tài khoản thành công");
      } catch (err) {
        return res.status(500).json(500);
      }
    } else {
      return res.status(403).json("bạn chỉ có thể cập nhập tài khoản của bạn");
    }
  },

  // async delete(req, res) {
  //   if (req.body.userId === req.params.id) {
  //     try {
  //       const user = await User.findByIdAndDelete(req.params.id);
  //       res.status(200).json(user);
  //     } catch (err) {
  //       return res.status(500).json(err);
  //     }
  //   } else {
  //     return res.status(403).json("bạn chỉ có thể xóa tài khoản của bạn");
  //   }
  // },
  async delete(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Xóa thành công");
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  async get(req, res) {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  userLogout: async (req, res) => {
    res.clearCookie("refreshCookie");
    res.status(200).json("Đăng xuất thành công");
  },
};

// lưu trữ token :
// C1: localStorage: dễ bị XSS
// C2: HTTP only cookies: gắn cookie khi request là http
// C3: redux store (redux toolkit) để lưu access token, http only cookies để lưu trữ refreshtoken
module.exports = authController;
