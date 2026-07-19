class HomeController {

    index(req, res) {

        const services = [
            "Web Development",
            "Mobile Development",
            "UI / UX Design"
        ];

        res.render("home", {
            title: "Home",
            services
        });

    }

}

module.exports = new HomeController();