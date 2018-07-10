const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.get('/', function (req, res){
	res.render('index');
	// res.send('<h1> This is jiawen home page </h1>');
});
app.get('/about', function(req,res){
	res.render('about');
});
app.get('/contact', function(req,res){
	res.render('contact');
});
app.get('/header', function(req,res){
	res.render('header');
});
app.get('/footer', function(req,res){
	res.render('footer');
});
app.listen(process.env.PORT || 3000, function(){
	console.log("listen to port 3000");
});
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth:{
		user:'zhujiawen519@gmail.com',
		pass:'Jw*8997290'
	}
});
var mailOptions = {
	from: 'zhujiawen519@gmail.com',
	to: 'jzhu10@mail.sfsu.edu',
	subject: 'sending a message',
	text: 'This is a text message'
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
