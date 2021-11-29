const express = require("express");
const spotTradeRoutes = require("./Routers/spotTradeRoutes");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");

const app = express();

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "TradeBookApi",
            description: "",
            contact: {
                name: "Trade"
            },
            servers: ["http://localhost:3000"]
        }
    },
    apis: ["app.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use("/spotTrade", cors(), spotTradeRoutes);

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(3000);