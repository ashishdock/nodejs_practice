// const fs = require("fs");
// fs.copyFileSync("file1.txt", "file2.txt");

var superheroes = require("superheroes");
var supervillains = require("supervillains");

var mySuperheroName = superheroes.random();
console.log(mySuperheroName);

var mySuperVillainName = supervillains.random();
console.log(mySuperVillainName);
