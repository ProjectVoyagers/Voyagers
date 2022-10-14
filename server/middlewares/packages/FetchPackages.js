const dotenv = require("dotenv");
dotenv.config();

const {fetchAllPackges} = require("../../controllers/users")

module.exports.getPackages = async(req,res) => {
    await fetchAllPackges()
    .then((data) => {
        // console.log(data);
        return res.json({data: data});
    }).catch((error) => {
        return res.status(400).send({error: error});
    })
}