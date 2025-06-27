const http = require('http');
const fs = require('fs');
const path = require('path');

let tasks = []; // In-memory task list

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading index.html');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });

  } else if (req.method === 'POST' && req.url === '/add') {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
      const { task } = JSON.parse(body);
      tasks.push(task);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, tasks }));
    });

  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
