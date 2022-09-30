
  addTask(task) {
    this.tasks.push(task);
    this.updateList();
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
    this.updateList();
  }

