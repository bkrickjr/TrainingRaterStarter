const express = require('express');

const app = express();

app.get( '/', (req, res) => { res.send("Helloworld!") } );

module.exports = app;