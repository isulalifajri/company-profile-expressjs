const express = require("express");

const router = express.Router();

const HomeController = require("../controllers/HomeController");
const AboutController = require("../controllers/AboutController");

router.get("/", HomeController.index);

router.get("/about", AboutController.index);

// router.get("/contact", (req, res) => {
//     res.send("Contact Page");
// });

module.exports = router;