class ServiceController {

    index(req, res) {

        res.render("services", {
            title: "Services"
        });

    }

}

module.exports = new ServiceController();