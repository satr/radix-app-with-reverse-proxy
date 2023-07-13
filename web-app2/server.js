const http = require('http');

const requestListener = function (req, res) {
    res.writeHead(200);
    console.log(`got request`);
    res.end(`Admin dashboard, ${process.env.USER_NAME}! DB password is ${process.env.DB_PASS}`);
}

http.createServer(requestListener).listen(8083);
console.log('web server is listening');
