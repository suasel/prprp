const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const saveButton = document.getElementById('saveTasks');

function addTask() {
    const taskText = taskInput.value.trim();
    
     if (taskText === '') return;

     const listItem = document.createElement('li');

     // Checkbox
     const checkbox = document.createElement('input');
     checkbox.type = 'checkbox';
     checkbox.classList.add('checkbox');
     checkbox.addEventListener('change', () => {
         listItem.classList.toggle('completed');
     });

     // Task Text
     const taskSpan = document.createElement('span');
     taskSpan.textContent = taskText;

     // Action Buttons Container
     const actions = document.createElement('div');
     actions.classList.add('actions');

     // Edit Button
     const editButton = document.createElement('button');
     editButton.classList.add('edit-btn');
     editButton.innerHTML = '&#9998;'; // Edit icon
     editButton.addEventListener('click', () => editTask(taskSpan));

     // Delete Button
     const deleteButton = document.createElement('button');
     deleteButton.classList.add('delete-btn');
     deleteButton.innerHTML = '&#128465;'; // Trash icon
     deleteButton.addEventListener('click', () => {
         listItem.remove();
     });

     actions.appendChild(editButton);
     actions.appendChild(deleteButton);

     listItem.appendChild(checkbox);
     listItem.appendChild(taskSpan);
     listItem.appendChild(actions);

     taskList.appendChild(listItem);
     taskInput.value = '';
 }

function editTask(taskSpan) {
      const newText = prompt('Edit your task:', taskSpan.textContent);
      if (newText !== null) {
          taskSpan.textContent = newText.trim();
      }
 }

function saveTasks() {
      alert('Tasks saved successfully!');
 }

addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addTask();
 });
saveButton.addEventListener('click', saveTasks);
