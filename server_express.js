var express = require('express')

var port = 8080;
var app = express();

app.get( '/', (req, res) => { res.send("Hello World!_!") } )
app.get( '/test', (req, res) => { res.send("Hello World Test Url!") }  )

app.listen(port)