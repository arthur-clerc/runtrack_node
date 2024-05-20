const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8888;
const server = http.createServer((request, response) => {
    fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
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
    console.log('Ouvrez votre navigateur et accédez à cette URL pour voir le contenu.');
});
