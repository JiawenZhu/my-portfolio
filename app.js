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
app.get('/payment', function(req,res){
	res.render('payment');
})
app.listen(process.env.PORT || 3009, function(){
	console.log("listen to port 3009");
});
