const addTaskBtn = document.getElementById("add-task-btn");
const editBtn = document.getElementById("save-button");
const deleteBtn = document.getElementById("delete-button");
const tasksContainer = document.getElementById("tasksContainer");
const listTitle = document.getElementById("inputListTitle");
let taskList = document.querySelectorAll(".task");
let isDoneList = Array.from(document.querySelectorAll(".is-done"));
let nextTaskId = isDoneList.length;

const url = window.location.href;
const listId = url.split('/')[4];

tasksContainer.addEventListener('click', (event) => {
    if (event.target.getAttribute("type") === 'checkbox') {
        event.target.toggleAttribute('checked');
    }
});

addTaskBtn.addEventListener('click', () => {
    tasksContainer.insertAdjacentHTML('beforeend', `<textarea class="form-control w-75 mb-1 mr-5 task" style="height: 100px;" placeholder="Введите задачу..." data-id=${nextTaskId}></textarea>` +
        `<input type="checkbox" class="ml-5 is-done" id=${nextTaskId}>` +
        `<span class="mr-5">Done</span>`);

    isDoneList = Array.from(document.querySelectorAll(".is-done"));
    taskList = document.querySelectorAll(".task");
    nextTaskId++;
});

editBtn.addEventListener('click', edit);

deleteBtn.addEventListener('click', del);

function edit() {
    let listToSend = {};
    listToSend.title = listTitle.value;

    let doneTasks = [];
    let notDoneTasks = [];

    taskList.forEach((elem) => {
        let checkbox = isDoneList.find((e) => e.getAttribute('id') === elem.getAttribute('data-id'));

        if (checkbox.getAttribute('checked') === 'checked' || checkbox.getAttribute('checked') === '') {
            doneTasks.unshift({task: elem.value, isDone: true});
        } else {
            notDoneTasks.push({task: elem.value, isDone: false});
        }
    });

    listToSend.taskList = notDoneTasks.concat(doneTasks);

    List.editList(listId, listToSend)
        .then(() => {
        window.location.href = '/'
    });
}

function del() {
    List.deleteList(listId)
        .then(() => {
        window.location.href = '/'
    })
}
