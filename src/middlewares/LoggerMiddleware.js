function LoggerMiddleware(req, res, next) {

    console.log("Request Masuk");

    next();

}

module.exports = LoggerMiddleware;