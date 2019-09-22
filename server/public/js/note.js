const title = document.getElementById('inputDefault')
const desc = document.getElementById('exampleTextarea')

const editBtn = document.getElementById('save-button')
const deleteBtn = document.getElementById('delete-button')

const url = window.location.href;
const id = url.split('/')[4]

editBtn.addEventListener('click', editNote);

function editNote(e){
    debugger;
    sendPut('/api/notes/' + id, title.value, desc.value);
}

async function sendPut(url,title, desc) {
    const response  = await fetch(`${url}/?title=${title}&desc=${desc}`);
    window.location.href = '/';
}
