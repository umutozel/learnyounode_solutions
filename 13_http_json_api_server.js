var port = process.argv[2];

var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response) {
	var requestUrl = url.parse(request.url, true);
	var resource = requestUrl.pathname;
	var date = new Date(requestUrl.query.iso);
	var result;
	
	if (resource == '/api/parsetime') {
		result = { 
			hour: date.getHours(), 
			minute: date.getMinutes(), 
			second: date.getSeconds() 
		};
	}
	else if (resource == '/api/unixtime') {
		result = {
			unixtime: date.getTime()
		};
	}
	
	if (result) {
		response.writeHead(200, { 'Content-Type': 'application/json' });
		response.end(JSON.stringify(result));	
	}
	else {
		response.writeHead(400);
		response.end();
	}
});
server.listen(port);