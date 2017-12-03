# node-cli-notes

Simple notes aplication in node.js. Stores notes in json file.

## HOW TO USE
Install depedencies
```
npm install in root directory
```
Listing notes
```
node app.js list
```
Adding notes
```
node app.js add --title="type your title here" --body="type your here"
node app.js add -t="type your title here" -b="type your here"
```
Reading notes
```
node app.js read --title="type your title here" 
node app.js read -t="type your title here" 
```
Removing notes
```
node app.js remove --title="type your title here" 
node app.js remove -t="type your title here" 
```
## INFO
All notes are stored in notes_data.json in root directory

# TODO
## Database support
change way of storing notes from json file to database.
