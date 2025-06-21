const API_URL = 'http://localhost:3000/api/tasks';
const taskForm = document.getElementById('taskForm');
const taskTitle = document.getElementById('taskTitle');
const taskDesc = document.getElementById('taskDesc');
const taskList = document.getElementById('taskList');

document.addEventListener('DOMContentLoaded', fetchTasks);

taskForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = taskTitle.value.trim();
  const description = taskDesc.value.trim();
  if (!title || !description) return;

  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description })
  });

  taskTitle.value = '';
  taskDesc.value = '';
  fetchTasks();
});

async function fetchTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();

  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTask(task.id, !task.completed));

    const span = document.createElement('span');
    span.innerHTML = `<strong>${task.title}</strong>: ${task.description}`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deleteTask(task.id);

    li.append(checkbox, span, deleteBtn);
    taskList.appendChild(li);
  });
}

async function toggleTask(id, completed) {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed })
  });
  fetchTasks();
}

async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  fetchTasks();
}
