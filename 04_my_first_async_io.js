var filePath = process.argv[2];
var fs = require('fs');
fs.readFile(filePath, 'utf8', function (err, data) {
	var fileLines = data.split('\n');
	console.log(fileLines.length-1);
});
