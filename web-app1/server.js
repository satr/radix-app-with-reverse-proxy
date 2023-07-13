const http = require('http');

const requestListener = function (req, res) {
    res.writeHead(200);
    http.get('http://web-api:8081/api/', function(httpRes) {
        let data = "";
        httpRes.on("data", function(chunk) {
            data += chunk;
        });
        httpRes.on("end", function() {
            return res.end(`Hello web-server: ${data}`);
        });
    });
}

http.createServer(requestListener).listen(8080);
console.log('web server is listening');
