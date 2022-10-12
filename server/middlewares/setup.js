module.exports.bypassCORS = async (req, res, next) => {
    // For CORS error
    res.set({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials" : true 
    });
    next();
  };