const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8888;

const server = http.createServer((req, res) => {
    const url = req.url;

    let filePath = '';

    if (url === '/' || url === '/index.html') {
        filePath = path.join(__dirname, 'index.html');
    } else if (url === '/about' || url === '/about.html') {
        filePath = path.join(__dirname, 'about.html');
    } else {
        filePath = path.join(__dirname, 'error.html');
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Erreur interne du serveur');
        } else {
            let contentType = 'text/html';
            if (filePath.endsWith('.css')) {
                contentType = 'text/css';
            } else if (filePath.endsWith('.js')) {
                contentType = 'application/javascript';
            }

            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});