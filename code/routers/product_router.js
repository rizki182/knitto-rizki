const express = require("express");
const router = express.Router();

const product_controller = require("../controllers/product_controller");

router.get("/", product_controller.index);
router.get("/:id", product_controller.detail);
router.post("/", product_controller.create);
router.put("/:id", product_controller.update);
router.delete("/", product_controller.delete);

module.exports = router;