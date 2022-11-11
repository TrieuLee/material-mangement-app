const Warehouse = require("../models/Warehouse");
const WarehouseController = {
  async create(req, res) {
    try {
      const create = await new Warehouse(req.body);
      const warehouse = await create.save();
      res.status(200).json(warehouse);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async update(req, res) {
    if (req.params.id) {
      try {
        await Warehouse.findByIdAndUpdate(req.params.id, {
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
        await Warehouse.findByIdAndDelete(req.params.id);
        res.status(200).json("Success!");
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(403).json("error");
    }
  },
  async get(req, res) {
    try {
      const warehouse = await Warehouse.find();
      res.status(200).json(warehouse);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
module.exports = WarehouseController;
