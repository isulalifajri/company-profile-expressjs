class ContactController {

    index(req, res) {

        res.render("contact", {
            title: "Contact"
        });

    }

    store(req, res) {

        console.log(req.body);

        res.send("Pesan berhasil dikirim.");

    }


}

module.exports = new ContactController();