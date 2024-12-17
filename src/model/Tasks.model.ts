import TaskItem, { Effort, Priority, Status } from "./TaskItem.model";

export interface TasksInterface {
  allTasks: TaskItem[];
  saveTask(): void;
  loadTasks(): void;
  clearTasks(): void;
  addTask(taskObject: TaskItem): void;
  deleteTask(id: number): void;
}

export default class Tasks implements TasksInterface {
  // singleton pattern
  private static instance: Tasks;

  // A private constructor prevents direct instantiation
  private constructor(private _taskLists: TaskItem[] = []) {}

  get allTasks() {
    return this._taskLists;
  }
  saveTask(): void {
    localStorage.setItem("tasks", JSON.stringify(this._taskLists));
  }
  clearTasks(): void {
    this._taskLists = [];
    this.saveTask();
  }
  deleteTask(id: number): void {
    this._taskLists.filter((item) => item.id !== id);
    this.saveTask();
  }
  addTask(taskObject: TaskItem): void {
    this._taskLists.push(taskObject);
    this.saveTask();
  }
  loadTasks() {
    const all_lists = localStorage.getItem("tasks");
    const parsed_list: {
      _id: number;
      _projectClient: string;
      _title: string;
      _task_priority: Priority;
      _task_effort: Effort;
      _task_status: Status;
      _has_due_date: boolean;
      _date: Date;
    }[] = JSON.parse(all_lists!);
    parsed_list?.forEach((task) => {
      // create a new instance of the object
      const newTaskItem = new TaskItem(
        task._id,
        task._projectClient,
        task._title,
        task._task_priority,
        task._task_effort,
        task._task_status,
        task._has_due_date,
        task._date
      );
      Tasks.instance.addTask(newTaskItem);
    });
  }
  // accessing out singleton instance
  public static getInstance(): Tasks {
    if (!Tasks.instance) {
      Tasks.instance = new Tasks();
    }
    return Tasks.instance;
  }
}
