var http = require('http');

function handleRequest(request, response){
	x = require('url').parse(request.url, true)
	console.log(x)
	if (x.pathname == '/api/unixtime') {
		date = new Date(x.query.iso);
		resp = {};
		resp.unixtime = date.getTime()
		response.end(JSON.stringify(resp));
		requestLog();
	} else if (x.pathname == '/api/parsetime') {
		date = new Date(x.query.iso);
		resp = {};
		resp.hour = date.getHours();
		resp.minute = date.getMinutes();
		resp.second = date.getSeconds();
		response.end(JSON.stringify(resp));
		requestLog();
	} else if (x.pathname == '/health') {
		response.writeHead(200);
		response.end('Server online');
		requestLog();
	}
}

function requestLog(custom) {
	console.log('Connection: ' + x.pathname + custom);
}

var server = http.createServer(handleRequest);
server.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
