const { validationResult } = require("express-validator");

function HandleValidation(req, res, next) {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(422).render("contact", {
            title: "Contact",
            errors: errors.array(),
            old: req.body
        });

    }

    next();

}

module.exports = HandleValidation;