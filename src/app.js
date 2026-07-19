const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const LoggerMiddleware = require("./middlewares/LoggerMiddleware");
const webRoutes = require("./routes/web");

const app = express();

/*
|--------------------------------------------------------------------------
| View Engine
|--------------------------------------------------------------------------
*/

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(expressLayouts);

app.set("layout", "layouts/main");

/*
|--------------------------------------------------------------------------
| Static Files
|--------------------------------------------------------------------------
*/

app.use(express.static(path.join(__dirname, "public")));

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