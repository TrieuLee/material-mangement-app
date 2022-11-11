const supllierController = require("../controllers/supplierController");

const router = require("express").Router();

router.get("/", supllierController.get);
router.post("/", supllierController.create);
router.put("/:id", supllierController.update);
router.delete("/:id", supllierController.delete);
module.exports = router;
