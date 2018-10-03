/* global document */
document.addEventListener('DOMContentLoaded', () => {
  const board = document.querySelector('#stick-note-board');
  const button = document.querySelector('#add-button');
  const searchInput = document.querySelector('#search-input');

  let notes = [];

  const dltNote = (e) => {
    const note = e.target.parentNode;
    const i = note.id.split('note-')[1];
    note.parentNode.removeChild(note);
    notes = [
      ...notes.slice(0, +i),
      ...notes.slice(1 + +i),
    ];
  };

  const createNote = () => {
    const note = document.createElement('div');
    const noteDltBtn = document.createElement('div');
    const noteHeader = document.createElement('textarea');
    const noteContent = document.createElement('textarea');
    const prevNoteI = notes.length > 0 ? notes[notes.length - 1].id.split('note-')[1] : 0;

    noteDltBtn.textContent = '✖';
    noteDltBtn.addEventListener('click', dltNote);
    noteHeader.value = `Note ${+prevNoteI + 1}`;

    note.appendChild(noteDltBtn);
    note.appendChild(noteHeader);
    note.appendChild(noteContent);

    noteDltBtn.classList.add('note-dlt-btn');
    noteHeader.classList.add('note-header');
    noteContent.classList.add('note-content');
    note.classList.add('note');

    noteContent.setAttribute('rows', 10);
    note.setAttribute('id', `note-${+prevNoteI + 1}`);
    board.appendChild(note);
    notes = [...notes, note];
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

  createNote();
});
