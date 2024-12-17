import TaskItem, { Effort, Priority } from "./model/TaskItem.model";
import Tasks from "./model/Tasks.model";
import TaskTemplate from "./templates/TaskTemplate";

function showError(errorElement: HTMLDivElement, message: string): void {
  errorElement.textContent = message;
}

function clearError(errorElement: HTMLDivElement): void {
  errorElement.textContent = "";
}

function render(task: Tasks): void {
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
    // this.render(task);

    // this.ul.appendChild(li);
  });
}

const loadApp = () => {
  const id = Math.floor(Math.random() * 100);
  // class singleton
  const tasks = Tasks.getInstance();
  const template = TaskTemplate.getInstance();

  // selectors
  const taskForm = document.getElementById("taskForm") as HTMLFormElement;
  const taskInput = document.getElementById("taskTitle") as HTMLInputElement;
  const projectInput = document.getElementById(
    "projectClient"
  ) as HTMLInputElement;

  // form listerner
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleError = document.getElementById("titleError") as HTMLDivElement;
    const projectClientError = document.getElementById(
      "projectClientError"
    ) as HTMLDivElement;
    const formData = new FormData(taskForm);
    const taskTitle = formData.get("taskTitle") as string;
    const projectClient = formData.get("projectClient") as string;
    const taskPriority = (
      document.querySelector(
        "input[name='priority']:checked"
      ) as HTMLInputElement
    )?.id;
    const levelOfEffort = document.querySelector(
      "input[name='levelOfEffort']:checked"
    )?.id;
    const hasDueDate = document.querySelector(
      "input[name='hasDueDate']:checked"
    )?.id;
    const date = formData.get("date") as unknown as Date;

    if (!projectClient || !taskTitle) {
      showError(projectClientError, "Project or client is required.");
      showError(titleError, "Task title is required.");
    } else {
      clearError(projectClientError);
      clearError(titleError);
      taskInput?.addEventListener("input", () => clearError(titleError));
      projectInput?.addEventListener("input", () =>
        clearError(projectClientError)
      );
      const newTask = new TaskItem(
        id,
        projectClient,
        taskTitle,
        taskPriority as Priority,
        levelOfEffort as Effort,
        "CREATED",
        Boolean(hasDueDate),
        date
      );
      tasks.addTask(newTask);
      template.render(tasks);
      taskInput.value = "";
      projectInput.value = "";
    }
  });

  tasks.loadTasks();
  template.render(tasks);
};

document.addEventListener("DOMContentLoaded", loadApp);
