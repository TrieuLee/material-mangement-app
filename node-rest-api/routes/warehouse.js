const wareHouseController = require("../controllers/wareHouseController");

const router = require("express").Router();

router.get("/", wareHouseController.get);
router.post("/", wareHouseController.create);
router.put("/:id", wareHouseController.update);
router.delete("/:id", wareHouseController.delete);
module.exports = router;
