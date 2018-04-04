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
app.listen(process.env.PORT || 3000, function(){
	console.log("listen to port 3000");
});
