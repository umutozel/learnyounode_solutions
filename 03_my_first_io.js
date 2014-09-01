var filePath = process.argv[2];
var fs = require('fs');
var buffer = fs.readFileSync(filePath);
var fileStr = buffer.toString();
var fileLines = fileStr.split('\n');
console.log(fileLines.length-1);