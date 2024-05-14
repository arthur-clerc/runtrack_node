const fs = require('fs');

const filePath = './data.txt';

try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    console.log(fileContent);
} catch (err) {
    console.error('Erreur lors de la lecture du fichier :', err);
}
