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
      <button class="buttonCloseTask">&times;</button>
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