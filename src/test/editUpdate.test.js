import { JSDOM } from 'jsdom';
import ToDoList from '../toDoList.js';
import { clearAll } from '../clearAll.js';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

// import Task from '../Task.js';

describe('UnitTests', () => {
  test('edit function', () => {
    document.body.innerHTML = '<ul id="list"></ul>';
    const listContainer = document.getElementById('list');
    const list = new ToDoList(listContainer);
    const task = {
      description: 'taskInput.asdgeasdgaefawsvalue',
      isCompleted: false,
      id: list.tasks.length + 1,
    };

    list.addTask(task);

    list.tasks[[list.tasks.length - 1]].description = 'new test description';

    expect(list.tasks[list.tasks.length - 1].description).toBe('new test description');
  });

  test('update function', () => {
    document.body.innerHTML = '<ul id="list"></ul>';
    const listContainer = document.getElementById('list');
    const list = new ToDoList(listContainer);
    const task = {
      description: 'taskInput.asdgeasdgaefawsvalue',
      isCompleted: false,
      id: list.tasks.length + 1,
    };
    list.addTask(task);

    list.toggleTask(list.tasks.length - 1);
    expect(list.tasks[list.tasks.length - 1].isCompleted).toBe(true);
  });

  test('Clear All function', () => {
    document.body.innerHTML = '<ul id="list"></ul>';
    const listContainer = document.getElementById('list');
    const list = new ToDoList(listContainer);
    const task = {
      description: 'taskInput.asdgeasdgaefawsvalue',
      isCompleted: true,
      id: list.tasks.length + 1,
    };
    list.addTask(task);
    list.addTask(task);
    clearAll(list);

    const numberOfCompleted = list.tasks.filter((task) => task.isCompleted === true).length;
    expect(numberOfCompleted).toBe(0);
  });
});
