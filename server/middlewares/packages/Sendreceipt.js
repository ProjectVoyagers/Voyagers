const dotenv = require("dotenv");
dotenv.config();

const nodemailer = require("nodemailer")
const fs = require("fs")


const options = require('../../documents/options.js')

const pdf = require('pdf-creator-node');

module.exports.sendreceipt=async(req,res)=>{
    const html1 = fs.readFileSync('E:/project/new_main/Voyagers/server/documents/doc.html', "utf8");
    console.log(req.body);

    const {name} = req.body;

    console.log(name);

    const {email} = req.body;

    console.log(email);

    const {address} = req.body;

    console.log(address);

    const {items} = req.body
    let products = items;
    console.log(products);

    let array = [];

    products.forEach(d => {
        const prod = {
            img: d.img,
            title: d.title,
            price: Number.parseInt(d.price),
            quantity:Number.parseInt(d.quantity),
            itemTotal: Number.parseInt(d.itemTotal),
            cust_address:d.address

        }
        array.push(prod)
    });

    let total = 0;
    array.forEach(i => {
        total += i.itemTotal;
    })

    const tod = new Date();
    tod.toISOString().toString();
   
    const g = tod.getDate() + "-" + tod.getMonth() + "-" + tod.getFullYear();
    g.toString();
    console.log(tod);

    const a = Math.floor(Math.random() * 101);

    console.log(Number.parseInt(total));
    let tot_total=Number.parseInt(total);

    const obj = {
        //today:tod,
        prodlist: array,
        subtotal: total,
        tax: 10,
        gtotal: tot_total + 10,


    }

    var document3 = {
        html: html1,
        data: {
            products: obj,
            today: g,
            invoice: a,
            cust_name:name,
            cust_mail:email,
            
        },
        path: "./sample.pdf",
        type: "",
    };

    pdf.create(document3, options)
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.error(error);
        });




    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "Billing Info",
            html: '<h1>Thanks for your purchasing </h1>',
            attachments: [
                {
                    path: 'E:/project/CLone voyagers/Voyagers/server/sample.pdf'
                }
            ]
        }
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error", error);
            }
            else {
                console.log("email sent" + info.response);
                res.status(201).json({ status: 201, info })
            }
        })

    } catch (error) {
        res.status(201).json({ status: 401, error })

    }

}