var directory = process.argv[2];
var extension = '.' + process.argv[3];
var fs = require('fs');
var path = require('path');
fs.readdir(directory, function(err, data) { 
	for (var i = 0; i < data.length; i++) {
		if (path.extname(data[i]) == extension)
			console.log(data[i]);
	}
});