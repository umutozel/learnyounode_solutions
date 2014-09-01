var uri = process.argv[2];
var http = require('http');
http.get(uri, function (response) {
	response.setEncoding('utf-8');
	response.on("data", console.log);
	response.on("error", console.error);
});
