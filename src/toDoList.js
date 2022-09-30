
  addTask(task) {
    this.tasks.push(task);
    this.updateList();
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
    this.updateList();
  }

  // eslint-disable-next-line class-methods-use-this
  selectTask(index) {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach((task, i) => {
      task.classList.remove('selected');
      if (index === i) {
        task.classList.add('selected');
      }
    });
  }

  toggleTask(i) {
    if (this.tasks[i].isCompleted === true) {
      this.tasks[i].isCompleted = false;
    } else {
      this.tasks[i].isCompleted = true;
    }
    this.updateList();
  }
