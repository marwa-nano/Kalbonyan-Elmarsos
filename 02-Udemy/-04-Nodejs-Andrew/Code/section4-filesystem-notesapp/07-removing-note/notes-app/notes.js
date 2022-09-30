const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "Your notes...";
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

const removeNote = function (title) {
  // console.log(title)
  const notes = loadNotes();
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title;
  });
  // saveNotes(notesToKeep);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};

/////////////////////challenge1/////////////////////////
// Challenge : Setup command option and function
// 1. Setup the remove command to take a required " title " option
// 2. Create and export a removeNote function fron notes.js
// 3. Call removeNote in remove command handler
// 4. Have reroveNote log the title of the note to be removed
// 5. Test your work using : node app.js remove --title = " some_title "
//////////////////////////////////////////////////////////////////////////
// Challenge : Wire up removeNote
// 1. Load existing notes
// 2. Use array filter nethod to remove the matching note ( if any )
// 3. Save the newly created array
// 4. Test your work with a title that exists and a title that doesn't exist
// node app.js remove --title="my first note"

//////////////////////////
// Challenge : Use chalk to provide useful logs for remove
// 1. If a note is removed , print " Nate reroved ! " with a green background
// 2. If no note is removed , print " No note Found ! " with a red background
