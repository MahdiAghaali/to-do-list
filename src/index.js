import './style.css';
import ToDoList from './ToDoList.js';

const listContainer = document.getElementById('list');
const list = new ToDoList(listContainer);

list.tasks = [
  {
    description: 'this is the first task',
    isCompleted: true,
    id: 0,
  },
  {
    description: 'this is the second task',
    isCompleted: true,
    id: 1,
  },
  {
    description: 'this is the third task',
    isCompleted: true,
    id: 2,
  },
];

list.updateList();
