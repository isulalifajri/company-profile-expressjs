require("dotenv").config();

const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");

const LoggerMiddleware = require("./middlewares/LoggerMiddleware");
const GlobalVariablesMiddleware = require("./middlewares/GlobalVariablesMiddleware");
const FlashMiddleware = require("./middlewares/FlashMiddleware");
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
app.use(GlobalVariablesMiddleware);

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(FlashMiddleware);

app.get("/test", (req, res) => {

    req.session.name = "Anak Kebun";

    res.send("Session dibuat.");

});

app.get("/check", (req, res) => {

    res.send(req.session.name);

});

console.log(process.env.PORT);
console.log(process.env.SESSION_SECRET);

app.use("/", webRoutes);

module.exports = app;