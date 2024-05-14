const path = require('node:path'); 

let files = path.basename('index.js');
let ext = path.extname('index.html');
let dirname = path.dirname('../');

console.log(files);
console.log(ext);
console.log(dirname);