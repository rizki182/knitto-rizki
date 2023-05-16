const express = require("express");
const { getPool } = require("./database");
const app = express();

const port = 3000

// other libraries
app.use(express.json());

// routers and middlewares
// product
const productRouter = require("./routers/product_router");
app.use("/product", productRouter);

// listen
app.listen(port);