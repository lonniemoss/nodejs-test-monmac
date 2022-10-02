const http = require('http');
const server = http.createServer((req, res) =>{
    response.end('voila, the response of the sereveur!');
});
server.listen(process.env.PORT || 3000);