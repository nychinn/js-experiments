var express = require('express'),
	cons = require('consolidate'),
	app = express()

app.engine('html', cons.swig)

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')


app.get('/', function(req, res) {
	res.render('text', {
		title: 'Hello World!'
	})
})

app.use('/multiple-checkboxes', function(req, res) {
	res.render('text', {
		title: 'Hello World!'
	})
})

app.listen(3000, function() {
	console.log('app is listening');
})