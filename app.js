var express = require('express');
var app = express();
app.set('views', __dirname + '/views');
app.engine('html', require('express-art-template'));

app.get('/', function(req, res) {
	let data = {
		title: '测试模板引擎'
	};
	res.render('test.html', data);
});
app.listen(3002);
module.exports = app;
