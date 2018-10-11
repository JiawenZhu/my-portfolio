
var bodyParser = require('body-parser');

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
});

app.get('/formSubmition', function(req,res){
	var name = req.query.firstname;
	var email = req.query.email;
	var country = req.query.country;
	var message = req.query.message;
	sendToDatabase(name, email, country, message);	
	res.render('contact');
});

function sendToDatabase(name, email, country, message){
	var mysql = require('mysql');

	var con = mysql.createConnection({
		host: "us-cdbr-gcp-east-01.cleardb.net",
		user: "bfdd5bbb499470",
		password: "b7163239",
		database: "gcp_91026194eb6f44d830f7"
	});

	con.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");
		var sql = "INSERT INTO customer (name, email, country, message) VALUES ('"+name+"', '"+email+"', '"+country+"', '"+message+"')";
		con.query(sql, function (err, result) {
			if (err) throw err;
			console.log("1 record inserted");
		});
	});
}
app.listen(process.env.PORT || 3009, function(){
	console.log("listen to port 3009");
});
