function GlobalVariablesMiddleware(req, res, next) {
    res.locals.appName = "Company Profile CMS";
    res.locals.companyName = "PT Maju Mundur Sejahtera";
    res.locals.year = new Date().getFullYear();

    res.locals.currentPath = req.path;
    next();
}

module.exports = GlobalVariablesMiddleware;