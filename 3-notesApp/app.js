console.log("starting app.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");
const notes = require("./notes");

const argv = yargs.argv;
var command = argv._[0];

if (command === "add") {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("note successfully created");
        console.log(note);
    } else {
        console.log("note title taken");
    }
} else if (command === "list") {
    console.log(notes.getAll());
} else if (command === "read") {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log(note);
    } else {
        console.log("note not found");
    }
} else if (command === "remove") {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "note was removed" : "note not found";
    console.log(message);
} else {
    console.log("command not recognized");
}
