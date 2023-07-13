const express = require("express");
const app = express();

app.get('/', function(req, res){
    res.send('hello api');
});

app.post('/', function(req, res){
    var body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(body)
        res.write("got request");
        res.end();
    });
});

app.listen(8081);