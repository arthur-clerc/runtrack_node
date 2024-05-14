const fs = require('fs');

const filePath = './data.txt';

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error('Erreur lors de la lecture du fichier :', err);
    } else {
        console.log(data);
    }
});
