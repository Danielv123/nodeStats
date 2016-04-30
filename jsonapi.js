var http = require('http');
var PORT = 13370;

function handleRequest(request, response){
	x = require('url').parse(request.url, true)
	requestLog();
	if (x.pathname == '/api/unixtime') {
		date = new Date(x.query.iso);
		resp = {};
		resp.unixtime = date.getTime()
		response.end(JSON.stringify(resp));
	} else if (x.pathname == '/api/parsetime') {
		date = new Date(x.query.iso);
		resp = {};
		resp.hour = date.getHours();
		resp.minute = date.getMinutes();
		resp.second = date.getSeconds();
		response.end(JSON.stringify(resp));
	} else if (x.pathname == '/health') {
		response.writeHead(200);
		response.end('Server online');
	}
}

function requestLog(custom) {
	console.log('Connection: ' + x.pathname + custom);
}

var server = http.createServer(handleRequest);
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
