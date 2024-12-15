// const taskForm = document.getElementById("taskForm") as HTMLFormElement;
// const taskInput = document.getElementById("taskTitle") as HTMLInputElement;
// const projectInput = document.getElementById("projectClient");

// function showError(errorElement: HTMLDivElement, message: string): void {
//   errorElement.textContent = message;
// }

// function clearError(errorElement: HTMLDivElement): void {
//   errorElement.textContent = "";
// }

// taskForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const titleError = document.getElementById("titleError") as HTMLDivElement;
//   const projectClientError = document.getElementById(
//     "projectClientError"
//   ) as HTMLDivElement;
//   const formData = new FormData(taskForm);
//   const taskTitle = formData.get("taskTitle");
//   const projectClient = formData.get("projectClient");
//   const taskPriority = (
//     document.querySelector("input[name='priority']:checked") as HTMLInputElement
//   )?.id;
//   const levelOfEffort = document.querySelector(
//     "input[name='levelOfEffort']:checked"
//   )?.id;
//   const hasDueDate = document.querySelector(
//     "input[name='hasDueDate']:checked"
//   )?.id;
//   const date = formData.get("date");

//   if (!projectClient) {
//     showError(projectClientError, "Project or client is required.");
//   } else {
//     clearError(projectClientError);
//   }

//   if (!taskTitle) {
//     showError(titleError, "Task title is required.");
//   } else {
//     clearError(titleError);
//   }

//   taskInput?.addEventListener("input", () => clearError(titleError));
//   projectInput?.addEventListener("input", () => clearError(projectClientError));

//   console.log("event is date", date);
// });

const loadApp = () => {
  console.log("testing");
};

document.addEventListener("DOMContentLoaded", loadApp);
