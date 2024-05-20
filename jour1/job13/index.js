const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8888;

const server = http.createServer((request, response) => {
    const url = request.url;

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
            response.writeHead(500);
            response.end('Erreur interne du serveur');
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Le serveur est démarré sur http://localhost:${PORT}/`);
    console.log('Ouvrez votre navigateur et accédez aux URL suivantes :');
    console.log(`- http://localhost:${PORT}/ (Page d'accueil)`);
    console.log(`- http://localhost:${PORT}/about (Page à propos)`);
});
