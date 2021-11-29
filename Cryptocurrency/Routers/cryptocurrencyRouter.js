const express = require("express");
const cryptocurrencyController = require("../Api/Controllers/cryptocurrencyController")

const router = express.Router();
const jsonParser = express.json();

router.post("/Map", cryptocurrencyController.cryptocurrencyMap);

router.get("/ByName", cryptocurrencyController.getCryptocurrencyByName);

router.get("/GetAll", cryptocurrencyController.getAllCryptocurrency);

router.get("/GetById", cryptocurrencyController.getById);

router.post("/GetByIds", jsonParser, cryptocurrencyController.getByIds);

module.exports = router;