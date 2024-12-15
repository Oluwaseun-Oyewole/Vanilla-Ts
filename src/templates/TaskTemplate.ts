import Tasks from "../model/Tasks.model";

export interface DOMList {
  ul: HTMLUListElement;
  // clear(): void;
  render(task: Tasks): void;
}

export default class TaskTemplate implements DOMList {
  ul: HTMLUListElement;
  static instance: TaskTemplate = new TaskTemplate();
  private constructor() {
    this.ul = document.getElementById("allTasks") as HTMLUListElement;
  }
  get UL() {
    return this.ul;
  }
  // clear(): void {
  //   this.ul.innerHTML = "";
  // }
  render(task: Tasks): void {
    console.log("tasksksk", task);
    // this.clear();
    task.allTasks.map((item) => {
      const li = document.createElement("li") as HTMLLIElement;
      li.tabIndex = 0;
      li.className = "bg-red-500";

      const heading = document.createElement("h1");
      heading.textContent = item.title;
      li.append(heading);

      const button = document.createElement("button");
      button.textContent = "x";
      button.addEventListener("click", () => {
        task.deleteTask(item.id);
      });
      li.append(button);
      this.render(task);

      this.ul.appendChild(li);
    });
  }
}
