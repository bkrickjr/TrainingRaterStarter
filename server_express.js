var express = require('express')

var port = 8080;
var app = express();

app.get( '/', (req, res) => { res.send("Hello World!_!") } );
app.get( '/test', (req, res) => { res.send("Hello World Test Url!") }  );

app.post( '/', (req, res) => { res.send('Got Post Request') } );

app.put( '/user', (req, res) => { res.send('Got Put Request') } );

app.delete( '/user', (req, res) => { res.send('Got Delete Request') } );

app.listen(port);