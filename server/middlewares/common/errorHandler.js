const createError = require("http-errors");


// 404 not found handler

function notFoundHandler(req,res,next) {
    next(createError(404, "Your requested content is not found!"));
}

// default error handler
function errorHandler(err, req, res, next) {
    next(createError(500, err));
}

module.exports = {
    notFoundHandler,
    errorHandler,
}