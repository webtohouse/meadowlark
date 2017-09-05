var fortune = require('./lib/fortune.js');
var express = require('express');
var app = express();

// 핸들바 뷰 엔진 설정
<<<<<<< HEAD
var handlebars = require('express-handlebars')
	.create({ defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// static 미들웨어
// 클라이언트에 전송할 정적파일(이미지,CSS,클라이언트 자바스크립트 등...)
app.use(express.static(__dirname + '/public'));

=======
var handlebars = requrie('express-handlebars').create({ defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

>>>>>>> 8e8c1234cf8a79b7cfa19bd9953108c6ef4786c3
app.set('port', process.env.PORT || 3000);


// Add Route
app.get('/', function(req, res){
		// res.type('text/plain');
		// res.send('Meadowlark Travel');
		res.render('home');
});

app.get('/about', function(req, res){
		// res.type('text/plain');
		// res.send('About Meadowlark Travel');
		res.render('about', { fortune: fortune.getFortune() });
});

// 커스텀 404 페이지
app.use(function(req, res, next){
	// res.type('text/plain');
	res.status(404);
	// res.send('404 - Not Found');
	res.render('404');
});

// 커스텀 500 페이지
app.use(function(req, res, next){
	console.error(err.stack);
	// res.type('text/plain');
	res.status(500);
	// res.send('500 - Server Error');
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' +
	app.get('port') + '; press Ctrl-C to terminate.');
});
