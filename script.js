// Planlayıcı öğeleri
const dateInput = document.getElementById('date');
const taskInput = document.getElementById('task');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

// Görev ekleme işlevi
function addTask() {
  const date = dateInput.value;
  const task = taskInput.value;

  if(date != '' && task != '') {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <span>${date}: ${task}</span>
      <button class="delete-button">Sil</button>
    `;

    taskList.appendChild(taskItem);

    dateInput.value = '';
    taskInput.value = '';

    // Görev silme işlemini ekle
    const deleteButton = taskItem.querySelector('.delete-button');
    deleteButton.addEventListener('click', function() {
      taskItem.remove();
    });
  }
}

// Ekleme düğmesine tıklama olaylarını dinle
addButton.addEventListener('click', addTask);
