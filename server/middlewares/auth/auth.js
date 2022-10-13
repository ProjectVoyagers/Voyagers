const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const {addUser, getUser} = require("../../controllers/users")

const salt_rounds = 10

module.exports.register = async(req,res) => {
    const {name, email, password, confPassword} = req.body;
    try{
        const hashPassword = bcrypt.hashSync(password,salt_rounds);
        const response = await addUser(name,email,hashPassword);
        if(response) return res.json({message: response});

    return res.status(400).json({error :"Invalid entry"});
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error});
  }
}
