const createError = require("http-errors");


// 404 not found handler

function notFoundHandler(req,res,next) {
    next(createError(404, "Your requested content is not found!"));
}

// default error handler
function errorHandler(err, req, res, next) {
    next(createError(500, `There was a server side error!`));
}

module.exports = {
    notFoundHandler,
    errorHandler,
}