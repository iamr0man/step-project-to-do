const newNote = new Note();
const btnNote = document.getElementById("create-note");
const btnList = document.getElementById("create-list");
const btnDelete = document.getElementById("delete-all");

btnNote.addEventListener("click", function () {
    newNote.createNote().then(res => window.location.replace(res.url));
})
btnList.addEventListener("click", function () {
    
})
btnDelete.addEventListener("click", function () {
    
})

