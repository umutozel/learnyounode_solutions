var fileLister = require('./06_make_it_modular_module.js');
fileLister(process.argv[2], process.argv[3], function(err, data){
	if (err)
		console.error(err);
		
	data.forEach(function(file) {
		console.log(file);
	});
});