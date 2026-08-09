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

    async show(req, res) {

        try {

            const id = Number(req.params.id);

            const contact = await Contact.findById(id);

            if (!contact) {

                return res.status(404).send(
                    "Contact tidak ditemukan."
                );

            }

            return res.render("contact/show", {

                title: "Contact Detail",

                contact

            });

        } catch (error) {

            console.error(error);

            return res.status(500).send(
                "Terjadi kesalahan pada server."
            );

        }

    }

    async edit(req, res) {

        try {

            const id = Number(req.params.id);

            const contact = await Contact.findById(id);

            if (!contact) {

                return res.status(404).send(
                    "Contact tidak ditemukan."
                );

            }

            return res.render("contact/edit", {

                title: "Edit Contact",

                contact,

                errors: res.locals.flash.errors || {},

                old: res.locals.flash.old || {}

            });

        } catch (error) {

            console.error(error);

            return res.status(500).send(
                "Terjadi kesalahan pada server."
            );

        }

    }

    async update(req, res) {

        try {

            const id = Number(req.params.id);

            await Contact.update(id, req.body);

            req.session.flash = {
                success: "Contact berhasil diperbarui."
            };

            return res.redirect(
                `/contact/messages/${id}`
            );

        } catch (error) {

            console.error(error);

            req.session.flash = {
                error: "Gagal memperbarui contact."
            };

            return res.redirect(
                `/contact/messages/${id}/edit`
            );

        }

    }

    async delete(req, res) {

        try {

            const id = Number(req.params.id);

            const contact = await Contact.delete(id);

            if (!contact) {

                req.session.flash = {
                    error: "Contact tidak ditemukan."
                };

                return res.redirect("/contact/messages");

            }

            req.session.flash = {
                success: "Contact berhasil dihapus."
            };

            return res.redirect("/contact/messages");

        } catch (error) {

            console.error(error);

            req.session.flash = {
                error: "Gagal menghapus contact."
            };

            return res.redirect("/contact/messages");

        }

    }

}

module.exports = new ContactController();