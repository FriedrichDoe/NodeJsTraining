console.log("application start");

const fs = require("fs");
const os = require("os");
const notes = require("./notes");
const _ = require("lodash");

var user = os.userInfo();
var res = notes.addNote();

console.log(`some new note from notes.js ${res}`);
console.log(_.isString("blablabla"));

var filteredArray = _.uniq(["andreww", 3, "andreww", 4, 3, 2, 1, 1, 1]);
console.log(filteredArray);

fs.appendFileSync(
    "greetings.txt",
    `hello ${user.username}!! (<- ES6 syntax feature) - your age is ${
        notes.age
    }\n`
);
console.log(
    "Hello Master " + user.username + ", the file was successfully created."
);
