const url = require('url');

const URL = "https://www.google.com&search=nodejs";

const parsedUrl = new url.URL(URL);

const protocol = parsedUrl.protocol;
const hostname = parsedUrl.hostname;
const searchParams = parsedUrl.searchParams;

console.log('Protocole utilisé :', protocol);
console.log('Nom d\'hôte :', hostname);
console.log('Paramètres de l\'URL :', searchParams.toString());

parsedUrl.hostname = "www.laplateforme.io";

parsedUrl.searchParams.append('lang', 'fr');

const newURL = parsedUrl.toString();

console.log('Nouvelle URL :', newURL);
