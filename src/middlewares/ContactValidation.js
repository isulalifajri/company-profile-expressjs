const { body } = require("express-validator");

const ContactValidation = [

    body("name")
        .notEmpty()
        .withMessage("Nama wajib diisi"),

    body("email")
        .notEmpty()
        .withMessage("Email wajib diisi")
        .bail()
        .isEmail()
        .withMessage("Format email tidak valid"),

    body("message")
        .notEmpty()
        .withMessage("Pesan wajib diisi")

];

module.exports = ContactValidation;