const http = require('http');

const server = http.createServer((req, res) => {

    res.write("Server is running. WELCOME!!");
    res.end();

}) 

server.listen(5000);