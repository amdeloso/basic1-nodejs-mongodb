
//1 initialize 
var express = require('express'); 
var path = require('path');
var bodyParser = require('body-parser');

// call
var app = express(); 

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));


// view Engine
app.set('view engine', 'ejs');


//render EJS
app.get('/', function(req, res){
	res.render('index');		
});

app.get('/about', function(req, res){
	res.render('about');	
});

app.get('/contact', function(req, res){
	res.render('contact');	
});
//end render EJS


// POST method
app.post('/test', function(req, res){
	
	//res.end(JSON.stringify(req.body));
	console.log(req.body.fistName);

});

app.post('/register', function(req, res){
	
	//res.end(JSON.stringify(req.body));
	console.log(req.body.fname);
	console.log(req.body.lname);

});
//end POST method

//start server
app.listen('3000', function(){
	console.log('Server running at 3000');
});
//end start server