const express = require("express");

const router = express.Router();

const HomeController = require("../controllers/HomeController");
const AboutController = require("../controllers/AboutController");
const ServiceController = require("../controllers/ServiceController");
const ContactController = require("../controllers/ContactController");
const ContactValidation = require("../middlewares/ContactValidation");

router.get("/", HomeController.index);

router.get("/about", AboutController.index);

router.get("/services", ServiceController.index);

router.get("/contact", ContactController.index);
router.post(
    "/contact",
    ContactValidation,
    ContactController.store
);

// router.get("/contact", (req, res) => {
//     res.send("Contact Page");
// });

module.exports = router;