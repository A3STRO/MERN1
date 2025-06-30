const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {    
    // Send the response body
    res.end('Hello, World!\n');
});

// Server listens on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});