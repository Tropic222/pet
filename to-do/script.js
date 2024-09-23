const inputHigh = document.getElementById('inputHigh');
const addButtonHigh = document.getElementById('addButtonHigh');
const taskBoxHigh = document.getElementById('taskBoxHigh');

const inputLow = document.getElementById('inputLow');
const addButtonLow = document.getElementById('addButtonLow');
const taskBoxLow = document.querySelector('.taskBoxLow');

function addTask(input, taskBox) {
  event.preventDefault(); 
  const taskText = input.value.trim(); 
  if (taskText !== '') { 
    const newTask = document.createElement('div'); 
    newTask.classList.add('task'); 
    newTask.innerHTML = ` 
      <label>
        <input type="checkbox" /> ${taskText}
      </label>
      <button class="buttonСloseTask">&times;</button>
    `;

    taskBox.appendChild(newTask); 
    input.value = '';
  }
}

addButtonHigh.addEventListener('click', function(event) {
  addTask(inputHigh, taskBoxHigh);
});

addButtonLow.addEventListener('click', function(event) {
  addTask(inputLow, taskBoxLow);
});

function removeTask(event) {
	if (event.target.classList.contains('buttonСloseTask')) {
		event.target.parentElement.remove();
	}
}
taskBoxHigh.addEventListener('click', removeTask)
taskBoxLow.addEventListener('click', removeTask)


inputHigh.addEventListener('keyup', function(event) {
	if(event.key === 'Enter') {
		addTask(inputHigh, taskBoxHigh)
	}
})

inputLow.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    addTask(inputLow, taskBoxLow);
  }
});


function saveTask() {
	const highTasks = taskBoxHigh.innerHTML
	const lowTasks = taskBoxLow.innerHTML;
	localStorage.setItem('highTasks', highTasks)
	localStorage.setItem('lowTasks', lowTasks)
}



taskBoxHigh.addEventListener('DOMSubtreeModified', saveTask);
taskBoxLow.addEventListener('DOMSubtreeModified', saveTask);

