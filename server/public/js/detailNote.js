const title = document.getElementById('inputDefault')
const desc = document.getElementById('exampleTextarea')

const editBtn = document.getElementById('edit-button')
const deleteBtn = document.getElementById('delete-button')

const url = window.location.href;
const id = url.split('/')[4]

editBtn.addEventListener('click', editNote);
deleteBtn.addEventListener('click', deleteNote);

function editNote() {
    Note.editNote(id, {
        title: title.value,
        description: desc.value
    }).then(() => window.location.href = '/')
}

function deleteNote() {
    Note.deleteNote(id).then(() => window.location.href = '/')
}