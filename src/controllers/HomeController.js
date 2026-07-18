class HomeController {

    index(req, res) {

        res.send("Home Controller");

    }

}

module.exports = new HomeController();