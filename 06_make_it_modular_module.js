module.exports = function(directory, extension, callback) {
	extension = "." + extension;
	var fs = require('fs');
	var path = require('path');
	fs.readdir(directory, function(err, data) { 
		if (err) return callback(err);

		files = data.filter(function(file) {
			return path.extname(file) == extension
		});
		callback(null, files);
	});
}