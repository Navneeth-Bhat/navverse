const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');
//use something other than gmail
let transporter  = nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    secure:false,
    port:587,
    auth:{
        user:'navneethbhat099',
        pass:'simbasimba123'
    },
})

let renderTemplate = (data, relativePath) =>{
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname, '../views/mailers' ,relativePath),
        data,
        function(err,template){
            if(err){console.log(err);return}
            mailHTML = template
        }
    )
    return mailHTML;
}

module.exports = {
    transporter:transporter,
    renderTemplate : renderTemplate
}