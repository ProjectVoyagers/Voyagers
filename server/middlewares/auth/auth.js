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

module.exports.login = async(req,res) => {
    if(req.user) {
        console.log(req.user.handle, "already logged in");
        return res.json(req.user);
    }
  
    const {usernameORemail, password} = req.body;
    try {
      const user = await getUser(usernameORemail);
     
      // ERROR: User not found 
      if(user.length === 0) return res.status(401).json({error: "User not found"});
  
      const match = await bcrypt.compare(password, user[0].password);
      
      // ERROR: Wrong password
      if(!match) return res.status(401).json({error: "Wrong Password"});
  
      const username = user[0].username;
  
      // Create access token (24 hours)
      const accessToken = jwt.sign({username}, process.env.COOKIE_SECRET,{
          expiresIn: '1d'
      });
      // Set cookie (24 hours)
      res.cookie('access_token', accessToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
      });
  
      console.log('Authentication Success');
      return res.json(user[0]);  
  
    } catch (error) {
      console.log(error);
      return res.status(400).json({error: error});
    }
}

module.exports.verifyToken = async(req,res) => {
    const accessToken = req.cookies['access_token'];
  if(accessToken) {
    try {
      const payload = jwt.verify(accessToken, process.env.COOKIE_SECRET);
      const username = payload.username;
      const user = await getUser(username);

      if(user.length != 0) {
          console.log('Token Verified');
          req.user = user[0];
      }
    } catch (error) {
        console.log(error);
    }
  }
  next();
}

module.exports.logout = async(req,res) => {
    let msg;  
    if(req.user) {
        msg = "User logged out successfully.";
        res.clearCookie('access_token');
    } else {
        msg = "No user logged in";
    }
    console.log(msg);
    res.json({
        message: msg
    });
}