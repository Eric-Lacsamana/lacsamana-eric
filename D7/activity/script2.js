const taskInput = document.getElementById('task')

const form = document.getElementById('task-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const newTask = document.createElement('li');
    const taskList = document.getElementById('task-list');

    newTask.textContent = taskInput.value;

    const deleteButton = document.createElement('button');

    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', () => {
        newTask.remove(); 
    });

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
    taskInput.value = '';
}
