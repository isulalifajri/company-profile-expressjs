const { validationResult } = require("express-validator");

function HandleValidation(req, res, next) {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

       req.session.flash = {
            errors: errors.mapped(),
            old: req.body
        };

        return res.redirect("/contact");

    }

    next();

}

module.exports = HandleValidation;