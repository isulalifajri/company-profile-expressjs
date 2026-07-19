class ServiceController {

    index(req, res) {

        const servicess = [
            "Web Development",
            "Mobile Application",
            "UI/UX Design",
            "SEO Optimization"
        ];
        const services = [
            {
                name: "Web Development",
                featured: true
            },
            {
                name: "SEO",
                featured: false
            },
            {
                name: "UI/UX",
                featured: true
            }
        ];

        res.render("services", {
            title: "Services",
            services, servicess
        });

    }

}

module.exports = new ServiceController();