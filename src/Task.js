export default class Task {
  constructor(id, description, isCompleted) {
    this.id = id;
    this.description = description;
    this.isCompleted = isCompleted;
  }

  showTask(container) {
    const htmlString = `<li id="${this.id}" class='task ${this.isCompleted ? 'checked' : ''}'>
        <div>
          <input type="checkbox" ${this.isCompleted ? 'checked' : ''}>
          <span>${this.description}</span>
        </div>
        <i class="fa-solid fa-trash-can remove"></i>
        <i class="fa-solid fa-ellipsis-vertical"></i>
        </li>`;
    container.insertAdjacentHTML('beforeend', htmlString);

    const cbs = container.querySelectorAll('input');
    cbs.forEach((cb, i) => {
      if (i === this.id) {
        cb.addEventListener('click', () => {
          this.updateTask();
        });
      }
    });
  }

  updateTask() {
    const element = document.getElementById(this.id);
    if (this.isCompleted) {
      this.isCompleted = false;
      element.classList.remove('checked');
    } else {
      this.isCompleted = true;
      element.classList.add('checked');
    }
  }
}