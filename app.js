const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
let command = process.argv[2];

console.log('Command: ', command);

switch (command){
    case 'add':
        var note = notes.addNote(argv.title, argv.body);
        if(note){
            notes.logNote(note);
        }
        else console.log('duplicate');
        break;
    case 'list':
        var store = notes.getAll();
        console.log(`Printing ${store.length} note(s)`);
        store.forEach((note) => notes.logNote(note));
        break;
    case 'remove':
        let removal = notes.removeNote(argv.title);
        var message = removal ? 'Note removed' : 'Note not removed';
        console.log(message);
        break;
    case 'read':
        let resultnote = notes.getNote(argv.title);
        if(resultnote){
            notes.logNote(resultnote);
        }
        else console.log('no note');
        break;
    default:
        console.log('Command not recognized');
        break;
}