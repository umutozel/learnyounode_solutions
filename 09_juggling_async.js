var http = require('http')
var bl = require('bl')

var count = 3;
results = Array(3);
getUrlData(0);
getUrlData(1);
getUrlData(2);
function getUrlData(index) {
	http.get(process.argv[2 + index], function(response) {
		response.pipe(bl(function (err, data) {
			if (err) return console.error(err)
			results[index] = data.toString();
			count--;
			if (!count) {
				console.log(results[0]);
				console.log(results[1]);
				console.log(results[2]);
			}
		}))
	});
};