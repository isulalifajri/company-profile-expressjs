const Contact = require("../models/Contact");

class ContactController {

    index(req, res) {

        res.render("contact", {

            title: "Contact",

            errors: res.locals.flash.errors || {},

            old: res.locals.flash.old || {}

        });

    }

    async store(req, res) {

        try {

            await Contact.create(req.body);

            req.session.flash = {
                success: "Pesan berhasil dikirim."
            };

            return res.redirect("/contact");

        } catch (error) {

            console.error(error);

            req.session.flash = {
                error: "Terjadi kesalahan saat menyimpan pesan."
            };

            return res.redirect("/contact");

        }

    }

    async list(req, res) {

        try {

            const contacts = await Contact.findAll();

            return res.render("contact/index", {

                title: "Contact Messages",

                contacts

            });

        } catch (error) {

            console.error(error);

            return res.status(500).send("Terjadi kesalahan pada server.");

        }

    }

}

module.exports = new ContactController();