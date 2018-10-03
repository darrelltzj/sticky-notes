/* global document */
// import Note from './scripts/note.js';

document.addEventListener('DOMContentLoaded', () => {
  const board = document.querySelector('#stick-note-board');
  const button = document.querySelector('#add-button');
  const searchInput = document.querySelector('#search-input');

  let notes = [];

  const createNote = () => {
    const note = document.createElement('div');
    const noteDltBtn = document.createElement('div');
    const noteHeader = document.createElement('textarea');
    const noteContent = document.createElement('textarea');

    noteDltBtn.textContent = '✖';
    noteHeader.value = `Note ${notes.length + 1}`;

    note.appendChild(noteDltBtn);
    note.appendChild(noteHeader);
    note.appendChild(noteContent);

    noteDltBtn.classList.add('note-dlt-btn');
    noteHeader.classList.add('note-header');
    noteContent.classList.add('note-content');
    note.classList.add('note');

    note.setAttribute('id', `note-${notes.length}`);
    board.appendChild(note);
    notes = [...notes, note];
  };

  const dltNote = (e) => {
  };

  const filterNotes = (e) => {
    const searchTxt = e.target.value;
    notes.forEach((note) => {
      const noteHeader = note.getElementsByClassName('note-header')[0];
      if (noteHeader && new RegExp(searchTxt, 'gi').test(noteHeader.value)) {
        note.classList.remove('hidden');
      } else {
        note.classList.add('hidden');
      }
    });
  };

  button.addEventListener('click', createNote);
  searchInput.addEventListener('input', filterNotes);
});
