const express = require("express");
const spotTradeController = require("../Api/Controllers/spotTradeController")

const jsonParser = express.json();
const router = express.Router();


router.post("/create", jsonParser, spotTradeController.create);

router.get("/getAll", spotTradeController.getAll);

router.get("/getById", spotTradeController.getById);

router.delete("/delete", spotTradeController.remove);

router.put("/update", jsonParser, spotTradeController.update);

module.exports = router;