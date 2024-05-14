const fs = require('fs');

const filePath = './data.txt';
const newContent = "Je manipule les fichiers avec un module node !";

try {
    fs.writeFileSync(filePath, newContent);
    console.log(`Le contenu du fichier ${filePath} a été modifié avec succès.`);
} catch (err) {
    console.error(`Erreur lors de l'écriture dans le fichier ${filePath} :`, err);
}
