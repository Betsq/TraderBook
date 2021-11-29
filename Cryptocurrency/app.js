const express = require("express");
const cryptocurrencyRouters = require("./Routers/cryptocurrencyRouter")
const cors = require("cors");

const app = express();

app.use("/cryptocurrency", cors(), cryptocurrencyRouters);

app.listen(3001);