import { JSDOM } from 'jsdom';
import ToDoList from '../ToDoList.js';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

// import Task from '../Task.js';

describe('UnitTests', () => {
  test('Add function', () => {
    document.body.innerHTML = '<ul id="list"></ul>';
    const listContainer = document.getElementById('list');
    const list = new ToDoList(listContainer);
    const task = {
      description: 'taskInput.value',
      isCompleted: false,
      id: list.tasks.length + 1,
    };
    list.addTask(task);
    list.addTask(task);
    expect(list.tasks.length).toBe(2);
  });

  test('remove function', () => {
    document.body.innerHTML = '<ul id="list"></ul>';
    const listContainer = document.getElementById('list');
    const list = new ToDoList(listContainer);
    list.removeTask(0);
    expect(list.tasks).toHaveLength(1);
  });
});
