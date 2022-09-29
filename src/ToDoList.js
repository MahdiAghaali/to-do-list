import Task from './Task.js';

export default class ToDoList {
  constructor(element) {
    this.container = element;
    this.tasks = [];
    if (localStorage.getItem('ToDoList') !== null) {
      this.tasks = JSON.parse(localStorage.getItem('ToDoList'));
    }
  }

  updateList() {
    this.container.innerHTML = '';
    for (let i = 0; i < this.tasks.length; i += 1) {
      const { description, isCompleted, id } = this.tasks[i];
      const task = new Task(id, description, isCompleted);
      task.showTask(this.container);
    }
    localStorage.setItem('ToDoList', JSON.stringify(this.tasks));
  }
}