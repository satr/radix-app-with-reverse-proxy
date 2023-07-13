var express = require('express');
var app = express();

app.get('/api', function (req, res) {
    res.end( 'This is API' );
})

app.get('/api/hello', function (req, res) {
    res.end( 'Hello API' );
})

app.listen(8081, '0.0.0.0');
console.log('server is listening');