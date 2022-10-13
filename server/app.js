const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const db = require("./config/dbConfig");

const {register} = require("./middlewares/auth/auth");
const {bypassCORS} = require("./middlewares/setup");

const app = express();
dotenv.config();

// internal imports
const {notFoundHandler, errorHandler} = require("./middlewares/common/errorHandler");
const { Router } = require("express");

// request parsers
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//parse Cookies
app.use(cookieParser(process.env.COOKIE_SECRET));


//routing setup

app.post("/register",bypassCORS, register);

// error handling 

// 404 error handler
app.use(notFoundHandler);
// common error handler
app.use(errorHandler);

app.listen(process.env.PORT || 3000, process.env.HOST, () => {
    console.log(`App listening on PORT ${process.env.PORT}`);
});