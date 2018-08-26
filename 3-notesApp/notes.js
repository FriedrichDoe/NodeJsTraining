const fs = require("fs");

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync("notes-data.json");
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = notes => {
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var addNote = (noteTitle, noteBody) => {
    var notes = fetchNotes();
    var note = {
        noteTitle,
        noteBody
    };

    var dublicateNotes = notes.filter(note => note.noteTitle === noteTitle);

    if (dublicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = noteTitle => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter(note => note.noteTitle === noteTitle);

    return filteredNotes[0];
};

var removeNote = noteTitle => {
    // fetch notes
    var notes = fetchNotes();

    // filter notes, removing the one with title of argument
    var filteredNotes = notes.filter(note => note.noteTitle !== noteTitle);

    // save new notes array
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};
