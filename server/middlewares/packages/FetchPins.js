const dotenv = require("dotenv");
dotenv.config();

const {fetchAllPins} = require("../../controllers/users")

module.exports.getPins = async(req,res) => {
    await fetchAllPins()
    .then((data) => {
        // console.log(data);
        return res.json({data: data});
    }).catch((error) => {
        return res.status(400).send({error: error});
    })
}