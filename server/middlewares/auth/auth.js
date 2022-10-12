const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const salt_rounds = 10

module.exports.register = async(req,res) => {
    const {firstName, lastName, email, password} = req.body;
    
}
