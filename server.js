let express = require('express'),
	app = express(),
	request = require('request'),
	bodyParser = require('body-parser'),
    path = require('path')

process.env.APIKEY = ''

express.static(__dirname)

app.use(bodyParser.json());

app.use('/resources', express.static(path.join('Front-End', '/resources')))

app.use('/vendors', express.static(path.join('Front-End', '/vendors')))

app.use('/', express.static(path.join('./', '/Music')))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/Front-End/index.html')
})

app.listen(process.env.PORT || 3006, err => {
	if (err) {
		console.log('Error starting server:', err)
	} else {
		console.log('Listening on port', process.env.PORT || 3006)
	}
})