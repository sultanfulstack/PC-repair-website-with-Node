var express = require('express');
var router = express.Router();
var nodemailer=require("nodemailer");


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'contact'});
});

//send email
router.post('/send',function(req,res,next){
    var transporter=nodemailer.createTransport({
        service:"Gmail",
        auth: {
            user: "sashasultanyan@gmail.com",
            pass: "iodevheroalwayswins2017"
        }
    });
var mailOptions={
    from:"John Dohe<sasha.sultanyan@yahoo.com>",
    to:"sashasultanyan@gmail.com",
    subject:"hello from pcreapit",
    text:"You have a submissiion form...Name:"+req.body.name+"Email"+req.body.email+"Message"+req.body.message,
    html:"<p>You have a submissiion form...</p><ul>Name:"+req.body.name+"Email"+req.body.email+"Message"+req.body.message,
}
transporter.sendMail(mailOptions, function(error,info){
    if(error){
        console.log(error);

        res.redirect("/");
    }else {
        console.log('Message snet' + info.response);
        res.redirect('/');

    }
    })
});
module.exports = router;
