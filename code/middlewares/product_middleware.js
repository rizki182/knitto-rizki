const express = require("express");
const router = express.Router();

const validator_helper = require("../helpers/validator_helper");

router.post("/", async (req, res, next) => {
  try {
    const schema = {
        type: "object",
        properties: {
            name: { type: "string" },
            price: { type: "number" }
        },
        required: ["name", "price"],
        additionalProperties: false
    }

    const validation = await validator_helper.validate(schema, req.body);
    if (!validation.valid) throw new Error(validation.error)
    
    next();

  } catch (err){
    res.status(400).json({"error": err.message});
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const schema = {
        type: "object",
        properties: {
            name: { type: "string" },
            price: { type: "number" }
        },
        required: ["name", "price"],
        additionalProperties: false
    }

    const validation = await validator_helper.validate(schema, req.body);
    if (!validation.valid) throw new Error(validation.error)
    
    next();

  } catch (err){
    res.status(400).json({"error": err.message});
  }
});

module.exports = router;