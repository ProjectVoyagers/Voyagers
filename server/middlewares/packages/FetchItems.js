const dotenv = require("dotenv");
dotenv.config();

const {fetchAllItems} = require("../../controllers/users")

module.exports.getItems = async(req,res) => {
    await fetchAllItems()
    .then((data) => {
        // console.log(data);
        return res.json({data: data});
    }).catch((error) => {
        return res.status(400).send({error: error});
    })
}