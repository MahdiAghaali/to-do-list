export const clearAll = (list) => {
  for (let i = list.tasks.length - 1; i >= 0; i -= 1) {
    if (list.tasks[i].isCompleted === true) {
      list.removeTask(i);
    }
  }
};

export default { clearAll };