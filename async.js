/*
var fs = require ('fs');

var content = fs.readFile(process.argv[2])
var lines = content.toString().split('\n').length -1

console.log(lines);
*/

var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, 'utf8', function(err,data) {
  var lines = data.split('\n').length-1;
  console.log(lines);
});
