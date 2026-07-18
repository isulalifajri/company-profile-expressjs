class HomeController {

    index(req, res) {

        res.render("home", {
            title: "Company Profile tes",
            company: "PT Maju Mundur Sejahtera",
            year: 2026
        });

    }

}

module.exports = new HomeController();