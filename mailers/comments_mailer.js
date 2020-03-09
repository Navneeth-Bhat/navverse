const nodemailer = require('../config/nodemailer');

exports.newComment = (comment) =>{
    nodemailer.transporter.sendMail({
        from: 'navneethbhat099@gmail.com',
        to: comment.user.email,
        subject:'sup',
        html: '<h1>Nikal Lawde</h1>'
    },(err,info) =>{
        if(err){console.log(err);return}
        console.log(info);
    }
    )
}