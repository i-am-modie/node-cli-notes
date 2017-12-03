const fs = require('fs');
const file = 'notes_data.json';
const fetchNotes = () => {
    try {
        let notesString = fs.readFileSync(file);
        return JSON.parse(notesString);
    }
    catch (e){
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync(file, JSON.stringify(notes));
};
var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body,
    };
    notes = fetchNotes();
    var duplicateNotes = notes.filter((note) => note.title === title );
    console.log(duplicateNotes);
    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes)
        return note;
    }
};

var getAll = () => {
  return fetchNotes();
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var cleared = notes.filter((note) => note.title !== title );
    saveNotes(cleared);
    return notes.length !== cleared.length;
};

var getNote = (title) => {
    var notes = fetchNotes();
    var cleared = notes.filter((note) => note.title === title );
    return cleared[0];
};

var logNote = (note) =>{
    console.log('save complete');
    console.log('----');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}
module.exports={
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};