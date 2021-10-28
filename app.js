const express = require("express");
const tradeRoutes = require("./Routers/tradeRoutes");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

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

app.use("/trade", tradeRoutes);

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(3000);