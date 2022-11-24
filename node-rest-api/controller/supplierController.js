const Supplier = require("../models/Supplier");
const SupplierController = {
  async create(req, res) {
    try {
      const create = await new Supplier(req.body);
      const supplier = await create.save();
      res.status(200).json(supplier);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async update(req, res) {
    if (req.params.id) {
      try {
        await Supplier.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        });
        res.status(200).json("Bạn đã cập nhập tài khoản thành công");
      } catch (err) {
        return res.status(500).json(500);
      }
    } else {
      return res.status(403).json("Lỗi hệ thống, vui lòng thử lại sau");
    }
  },
  async delete(req, res) {
    if (req.params.id) {
      try {
        await Supplier.findByIdAndDelete(req.params.id);
        res.status(200).json("Bạn đã xóa tài khoản thành công");
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(403).json("lỗi");
    }
  },
  async get(req, res) {
    try {
      const supplier = await Supplier.find();
      res.status(200).json(supplier);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
module.exports = SupplierController;
