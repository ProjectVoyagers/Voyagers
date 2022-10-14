const dotenv = require("dotenv");
dotenv.config();

const {fetchAllPackges} = require("../../controllers/users")

module.exports.getPackages = async(req,res) => {
    const {count} = req.body;
    await fetchAllPackges(count)
    .then((data) => {
        console.log(data);
        return res.json({data: data});
    }).catch((error) => {
        return res.status(200).send({error: error});
    })
}