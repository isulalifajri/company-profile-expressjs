const express = require("express");

const LoggerMiddleware = require("./middlewares/LoggerMiddleware");
const webRoutes = require("./routes/web");

const app = express();

/*
|--------------------------------------------------------------------------
| Global Middleware
|--------------------------------------------------------------------------
*/

app.use(LoggerMiddleware);

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

app.use("/", webRoutes);

module.exports = app;