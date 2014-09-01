var port = process.argv[2];

var net = require('net');
var strftimeTZ = require('strftime').strftimeTZ;

var server = net.createServer(function(socket) {
	var dateStr = strftimeTZ('%F %H:%M\n', new Date());
	socket.end(dateStr);
});
server.listen(port);