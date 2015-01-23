var ws = require("nodejs-websocket");
var http = require("http");
var url = require("url");

var urls = [];

var wsServer = ws.createServer(function (conn) {
	//console.log("New connection");
	conn.on("text", function(str) {
		console.log("Received " + str)
		conn.sendText(str)
	});
}).listen(9090);

http.createServer(function(req,res) {
	var uri = url.parse(req.url).pathname;
	var url_parts;
	if(req.method == 'GET') {
		url_parts = url.parse(req.url, true);
	}

	if(uri == '/message') {
		//broadcast(wsServer, url_parts.query.message);
		urls[urls.length] = url_parts.query.message;
		console.log(urls);
		console.log(urls.length);
	} else {
		console.log("URI did not match, doing nothing");
	}


	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end();
}).listen(9091);

function broadcast(server,msg) {
	server.connections.forEach(function (conn) {
		conn.sendText(msg.toString())
	})
}


function sendURLs() {
	if(urls.length > 0) {
		broadcast(wsServer, urls[0]);
		urls.shift();
	}
}
setInterval(function() {sendURLs();}, 1000);
