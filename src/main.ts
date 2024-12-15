import TaskItem, { Effort, Priority } from "./model/TaskItem.model";
import Tasks from "./model/Tasks.model";
import TaskTemplate from "./templates/TaskTemplate";

function showError(errorElement: HTMLDivElement, message: string): void {
  errorElement.textContent = message;
}

function clearError(errorElement: HTMLDivElement): void {
  errorElement.textContent = "";
}

const loadApp = () => {
  const id = Math.floor(Math.random() * 100).toString();
  // class singleton
  const tasks = Tasks.getInstance();
  const template = TaskTemplate.instance;

  // selectors
  const taskForm = document.getElementById("taskForm") as HTMLFormElement;
  const taskInput = document.getElementById("taskTitle") as HTMLInputElement;
  const projectInput = document.getElementById("projectClient");

  // form listerner
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleError = document.getElementById("titleError") as HTMLDivElement;
    const projectClientError = document.getElementById(
      "projectClientError"
    ) as HTMLDivElement;
    const formData = new FormData(taskForm);
    const taskTitle = formData.get("taskTitle") as string;
    const projectClient = formData.get("projectClient");
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

    if (!projectClient) {
      showError(projectClientError, "Project or client is required.");
    } else {
      clearError(projectClientError);
    }

    if (!taskTitle) {
      showError(titleError, "Task title is required.");
    } else {
      clearError(titleError);
    }

    taskInput?.addEventListener("input", () => clearError(titleError));
    projectInput?.addEventListener("input", () =>
      clearError(projectClientError)
    );

    const newTask = new TaskItem(
      id,
      taskTitle,
      taskPriority as Priority,
      levelOfEffort as Effort,
      "CREATED",
      Boolean(hasDueDate),
      date
    );
    tasks.addTask(newTask);
    // template.render(tasks);
    console.log("new tasks new tasks", newTask);
  });

  tasks.loadTasks();
  template.render(tasks);
};

document.addEventListener("DOMContentLoaded", loadApp);
