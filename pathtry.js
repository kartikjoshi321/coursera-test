var path=require("path");

var ab="./controllers/index.html";
console.log(path.normalize(ab));
console.log(path.dirname(ab));
console.log(path.basename(ab));
console.log(path.extname(ab));
console.log(__dirname);
console.log(__filename);
