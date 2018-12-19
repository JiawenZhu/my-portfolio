
var bodyParser = require('body-parser');

const express = require('express');

const app = express();

var JSAlert = require("js-alert");

app.set('view engine', 'ejs');
app.get('/', function(req, res){
	res.sendFile(__dirname);
});
app.get('/', function (req, res) {
	res.render('index');
});
app.get('/about', function (req, res) {
	res.render('about');
});
app.get('/contact', function (req, res) {
	res.render('contact');
});
app.get('/header', function (req, res) {
	res.render('header');
});
app.get('/footer', function (req, res) {
	res.render('footer');
});
app.get('/read', function (req, res) {
	// urls also uses booktitles as its reference
	var bookTitles = ["book1", "book2", "book3"];
	var booksContents = ["content1", "content2", "content3"];
	var imagesURLs = [
		"https://images.unsplash.com/photo-1490633874781-1c63cc424610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
		"https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
		"https://images.unsplash.com/photo-1513545581681-9217042d29b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
	];
	res.render('read', book={
		titles: bookTitles,
		contents: booksContents,
		imgURLs: imagesURLs,
	});
});
app.get('/book1', function(req, res){
	res.render('book1');
});
// access internal book-matrial folder
app.use('/book1', express.static(__dirname+'/book-matrial'));
// access internal views folder 
app.use('/book1', express.static(__dirname+'/views'));
// access internal p5-library folder
app.use('/book1', express.static(__dirname+'/p5-library'));

app.get('/formSubmition', function (req, res) {
	var name = req.query.firstname;
	var email = req.query.email;
	var country = req.query.country;
	var message = req.query.message;
	sendToDatabase(name, email, country, message);
	res.render('/header');
});

function sendToDatabase(name, email, country, message) {
	var mysql = require('mysql');

	var con = mysql.createConnection({
		host: "us-cdbr-gcp-east-01.cleardb.net",
		user: "bfdd5bbb499470",
		password: "b7163239",
		database: "gcp_91026194eb6f44d830f7"
	});

	con.connect(function (err) {
		if (err) throw err
		else
			console.log("database Connected!");

		var dupEmail = "SELECT * from customer where email='" + email + "'";
		con.query(dupEmail, function (err, result) {
			if (result.length != 0) {
				console.log("email has been taken!");
			}
			else {
				var sql = "INSERT INTO customer (name, email, country, message) VALUES ('" + name + "', '" + email + "', '" + country + "', '" + message + "')";
				con.query(sql, function (err, result) {
					if (err) console.log("databse has been disconnected!");
					else {
						console.log("1 record inserted");
					}
				});
			}
		});

	});
}
app.listen(process.env.PORT || 3003, function () {
	console.log("listen to port 3003");
});
