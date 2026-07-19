class ContactController {

    index(req, res) {

        res.render("contact", {
            title: "Contact"
        });

    }

}

module.exports = new ContactController();