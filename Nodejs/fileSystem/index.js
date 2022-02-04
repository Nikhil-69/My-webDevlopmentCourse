// fs import file system functions so we can use read and write oprations
//path function helps us to give path
const fs = require("fs");
const path = require("path");
//path.join join path of file and __dirname gives path to the current directory
const p1 = path.join(__dirname, "files/abc.txt");

const data = "Wrinting the data using node.js";

fs.writeFile(p1, data, (err) => {
  if (err) console.log("error");
});
fs.readFile(p1, (err, data) => {
  if (err) console.log(err);
  else if (data) console.log(data.toString());
});
