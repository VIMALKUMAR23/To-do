document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.marginLeft = '10px';
        deleteButton.onclick = () => {
            taskList.removeChild(li);
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = '';
    }

    // Event listener for Enter key
    taskInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
