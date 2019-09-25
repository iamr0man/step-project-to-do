const title = document.getElementById('inputDefault')
const desc = document.getElementById('exampleTextarea')

const saveBtn = document.getElementById('save-button')

const url = window.location.href;
const id = url.split('/')[4]

saveBtn.addEventListener('click', saveNote);

function saveNote() {
    Note.saveNote({
        title: title.value,
        description: desc.value
    }).then(() => window.location.href = '/')
}