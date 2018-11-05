//http comes from node
var http = require('http')

var server = http.createServer(function(req, res){
    res.writeHead(200);
    res.end("Hello World");
})

server.listen(8080);

/*
//Could be done this way if function call backs are not your thing, 
//but samples from now on will have inline functions

var serverConfiguration = function(req, res) {
    res.writeHead(200);
    res.end("Hello World");
}

var server = serverConfiguration;

server.listen(8080);
*/