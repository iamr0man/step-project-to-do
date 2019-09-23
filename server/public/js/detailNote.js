const newNote = new Note();
const title = document.getElementById('inputDefault')
const desc = document.getElementById('exampleTextarea')

const editBtn = document.getElementById('edit-button')
const deleteBtn = document.getElementById('delete-button')

const url = window.location.href;
const id = url.split('/')[4]

editBtn.addEventListener('click', editNote);
deleteBtn.addEventListener('click', deleteNote);

function editNote() {
    newNote.editNote(id, {
            title: title.value,
            description: desc.value
        })
        .then(res => {
            window.location.href = '/'
        })
}

function deleteNote() {
    debugger;
    newNote.deleteNote(id)
    .then(res => {
        window.location.href = '/'
    })
}