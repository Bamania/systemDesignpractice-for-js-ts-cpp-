const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/api/test' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Hello from local test API!', id: 1 }));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not found' }));
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Test API server running at http://localhost:${PORT}/api/test`);
});
