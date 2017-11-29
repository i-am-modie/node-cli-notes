console.log('Starting apka');

const fs = require('fs');

const fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes_data.json');
        return JSON.parse(notesString);
    }
    catch (e){
        return [];
    }
};

const saveNotes = (file, notes) => {
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
        saveNotes('notes_data.json', notes)
        return note;
    }
};


var getAll = () => {
  console.log('Getting all notes');
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var cleared = notes.filter((note) => note.title !== title );
    saveNotes('notes_data.json', cleared);
    return notes.length !== cleared.length;
};

var getNote = (title) => {
    var notes = fetchNotes();
    var cleared = notes.filter((note) => note.title === title );
    return cleared[0];
};

var logNote = (note) =>{
    console.log('save complete');
    console.log('---');
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