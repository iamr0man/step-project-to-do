
const btnNote = document.getElementById("create-note");
const btnList = document.getElementById("create-list");
const btnDelete = document.getElementById("delete-all");
const note = document.querySelectorAll(".note")
const list = document.querySelectorAll(".list")
const deleteBtn = document.querySelectorAll(".deleteBtn")


btnNote.addEventListener("click", function () {
    Note.createNote().then(res => {
        window.location.replace(res.url);
    });
})

btnList.addEventListener("click", function () {
    List.createList().then(res => {
        window.location.replace(res.url);
    });
});

btnDelete.addEventListener("click", function () {
    List.deleteAll().then(res => {
        window.location.reload();
    });
});

note.forEach(element => {
    element.addEventListener("click", function (el) {
        if (el.target.tagName == "SPAN"){
            Note.deleteNote(this.id).then(
                res =>{
                    window.location.reload();
                }
            )
        }
        else{
            Note.openEditNote(this.id).then(res =>{
                window.location.replace(res.url);
            })
        }
    });
});

list.forEach(element => {
    element.addEventListener("click", function (el) {
        if (el.target.tagName == "SPAN"){
            List.deleteList(this.id).then(
                res =>{
                    window.location.reload();
                }
            )
        }
        else{
            List.openEditList(this.id).then(res =>{
                window.location.replace(res.url);
            })
        }
    });
});
