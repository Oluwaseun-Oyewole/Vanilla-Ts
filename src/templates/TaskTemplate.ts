import Tasks from "../model/Tasks.model";

export interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(task: Tasks): void;
}

export default class TaskTemplate implements DOMList {
  ul: HTMLUListElement;
  private static instance: TaskTemplate;
  private constructor() {
    this.ul = document.getElementById("allTasks") as HTMLUListElement;
  }

  get UL() {
    return this.ul;
  }
  clear(): void {
    this.ul.innerHTML = "";
  }

  public static getInstance(): TaskTemplate {
    if (!TaskTemplate.instance) {
      TaskTemplate.instance = new TaskTemplate();
    }
    return TaskTemplate.instance;
  }

  render(task: Tasks) {
    task.allTasks.map((item) => {
      const li = document.createElement("li") as HTMLLIElement;
      const divContainerTop = document.createElement("div") as HTMLDivElement;
      const divContainerBottom = document.createElement(
        "div"
      ) as HTMLDivElement;
      li.tabIndex = 0;
      li.className = "text-black bg-white rounded-lg text-sm";
      li.classList.add("allTask_items");

      const heading = document.createElement("h1");
      const assignProject = document.createElement("h2");
      const date = document.createElement("p");
      const button = document.createElement("button") as HTMLButtonElement;

      assignProject.textContent = item.projectClient;
      heading.textContent = item.title;
      date.textContent = item?.date
        ? `Due: ${item.date.toString().split("T")[0]}`
        : `....`;
      button.textContent = "x";

      divContainerTop.append(heading);
      divContainerBottom.append(date);
      divContainerBottom.append(assignProject);

      divContainerTop.className = "flex items-center justify-between";
      divContainerBottom.className = "flex items-center justify-between";
      button.className = "bg-red-500 text-white";

      button.addEventListener("click", () => {
        task.deleteTask(item.id);
        this.render(task);
      });

      divContainerTop.append(button);
      li.append(divContainerTop);
      li.append(divContainerBottom);
      this.ul.append(li);
    });
  }
}
