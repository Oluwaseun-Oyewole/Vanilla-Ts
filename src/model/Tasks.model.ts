import TaskItem from "./TaskItem.model";

//  {
//    _id: string;
//    _title: string;
//    _task_priority: Priority;
//    _task_effort: Effort;
//    _task_status: Status;
//    _has_due_date: boolean;
//    _date: Date;
//  }
export interface TasksInterface {
  allTasks: TaskItem[];
  saveTask(): void;
  loadTasks(): void;
  clearTasks(): void;
  addTask(taskObject: TaskItem): void;
  deleteTask(id: string): void;
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
  deleteTask(id: string): void {
    this._taskLists.filter((item) => item.id !== id);
    this.saveTask();
  }
  addTask(taskObject: TaskItem): void {
    this._taskLists.push(taskObject);
    this.saveTask();
  }
  loadTasks() {
    const all_lists = localStorage.getItem("tasks");
    const parsed_list: TaskItem[] = JSON.parse(all_lists!);
    return parsed_list;
    // parsed_list.forEach((task) => {
    //   const newTaskItem = new TaskItem(
    //     task.id,
    //     task.title,
    //     task.taskPriority,
    //     task.taskEffort,
    //     task.taskStatus,
    //     task.hasDueDate,
    //     task.date
    //   );
    //   Tasks.instance.addTask(newTaskItem);
    // });
  }
  // accessing out singleton instance
  public static getInstance(): Tasks {
    if (!Tasks.instance) {
      Tasks.instance = new Tasks();
    }
    return Tasks.instance;
  }
}
