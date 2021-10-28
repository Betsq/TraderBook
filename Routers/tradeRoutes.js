const express = require("express");
const tradeController = require("../Api/Controllers/tradeController")

const jsonParser = express.json();
const router = express.Router();


router.post("/create", jsonParser, tradeController.create);

router.get("/getAll", tradeController.getAll);

router.get("/getById", tradeController.getById);

router.delete("/delete", tradeController.remove);

router.put("/update", jsonParser, tradeController.update);

module.exports = router;