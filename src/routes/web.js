const express = require("express");

const router = express.Router();

const HomeController = require("../controllers/HomeController");
const AboutController = require("../controllers/AboutController");
const ServiceController = require("../controllers/ServiceController");
const ContactController = require("../controllers/ContactController");
const ContactValidation = require("../middlewares/ContactValidation");
const HandleValidation = require("../middlewares/HandleValidation");

router.get("/", HomeController.index);

router.get("/about", AboutController.index);

router.get("/services", ServiceController.index);

// route contact
router.get("/contact", ContactController.index);

router.post(
    "/contact",
    ContactValidation,
    HandleValidation,
    ContactController.store
);

router.get(
    "/contact/messages",
    ContactController.list
);

router.get(
    "/contact/messages/:id",
    ContactController.show
);

router.get(
    "/contact/messages/:id/edit",
    ContactController.edit
);

router.post(
    "/contact/messages/:id/update",
    ContactValidation,
    HandleValidation,
    ContactController.update
);

// router.get("/contact", (req, res) => {
//     res.send("Contact Page");
// });

module.exports = router;