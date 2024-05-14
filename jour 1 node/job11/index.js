const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World !\n');
});

const PORT = 8888;
server.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}/`);
    console.log('Bravo, vous avez créé votre premier serveur web avec Node.js.');
});
