var port = process.argv[2];

var http = require('http');
var through2Map = require('through2-map');

var server = http.createServer(function(request, response) {
	if (request.method != 'POST')
		response.end('Please use POST.');
		
	request.pipe(through2Map(function (data) {
		return data.toString().toUpperCase();
	})).pipe(response);
});
server.listen(port);