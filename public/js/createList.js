const addTaskBtn = document.getElementById("add-task-btn");
const tasksContainer = document.getElementById("tasksContainer");
const saveBtn = document.getElementById('save-button');
const taskListTitle = document.getElementById('inputTitle');
let taskList = document.querySelectorAll(".task");

addTaskBtn.addEventListener('click', () => {
    tasksContainer.insertAdjacentHTML('beforeend', '<input type="text" class="form-control task" placeholder="Введите задачу...">');

    taskList = document.querySelectorAll(".task");
});

saveBtn.addEventListener('click', () => {
    let taskListToSave = {};
    taskListToSave.title = taskListTitle.value;
    taskListToSave.taskList = [];

    taskList.forEach((elem) => {
        taskListToSave.taskList.push({task: elem.value, isDone: false})
    });

    List.saveList(taskListToSave)
        .then(() => {
            window.location.href = '/'
        })
});
