function LoggerMiddleware(req, res, next) {

    console.log("========== REQUEST ==========");
    console.log("Method :", req.method);
    console.log("URL    :", req.originalUrl);
    console.log("Time   :", new Date().toLocaleString());
    console.log("=============================");

    next();

}

module.exports = LoggerMiddleware;