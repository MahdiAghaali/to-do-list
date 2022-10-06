import './style.css';
import ToDoList from './toDoList.js';
import { clearAll } from './clearAll.js';

const listContainer = document.getElementById('list');
const list = new ToDoList(listContainer);
const taskInput = document.getElementById('taskInput');

list.updateList();

const submit = () => {
  if (taskInput.value === '') {
    return;
  }
  const task = {
    description: taskInput.value,
    isCompleted: false,
    id: list.tasks.length + 1,
  };
  list.addTask(task);
  taskInput.value = '';
};

document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    submit();
  }
});

document.getElementById('enter').addEventListener('click', submit);

const btnClearAll = document.getElementById('removeAll');
btnClearAll.addEventListener('click', clearAll(list));