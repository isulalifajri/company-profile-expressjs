class AboutController {

    index(req, res) {

        res.render("about", {
            title: "About"
        });

    }

}

module.exports = new AboutController();