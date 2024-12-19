export type Priority = "High" | "Medium" | "Low";
export type Effort = "Easy" | "Moderate" | "Hard";
export type Status = "IN-PROGRESS" | "DONE" | "CREATED";

export interface TaskInterface {
  id: number;
  title: string;
  taskPriority: Priority;
  taskEffort: Effort;
  taskStatus: Status;
  hasDueDate?: boolean;
  date: Date;
  projectClient: string;
  hasCompleted?: boolean;
}

export default class TaskItem implements TaskInterface {
  constructor(
    private _id = 0,
    private _projectClient = "",
    private _title = "",
    private _task_priority: Priority = "Low",
    private _task_effort: Effort = "Easy",
    private _task_status: Status = "CREATED",
    private _has_due_date = false,
    private _date = new Date(),
    private _hasCompleted = false
  ) {}

  //   getters
  get id() {
    return this._id;
  }

  get hasCompleted() {
    return this._hasCompleted;
  }
  get projectClient() {
    return this._projectClient;
  }
  public get title() {
    return this._title;
  }

  public get taskPriority() {
    return this._task_priority;
  }

  public get taskStatus() {
    return this._task_status;
  }

  public get taskEffort() {
    return this._task_effort;
  }

  public get hasDueDate() {
    return this._has_due_date;
  }

  public get date() {
    return this._date;
  }

  //   setters
  set id(id: number) {
    this._id = id;
  }

  set projectClient(project: string) {
    this._projectClient = project;
  }
  set title(title: string) {
    this._title = title;
  }
  set taskPriority(task: Priority) {
    this._task_priority = task;
  }
  set taskStatus(status: Status) {
    this._task_status = status;
  }
  set taskEffort(effort: Effort) {
    this._task_effort = effort;
  }
  set hasDueDate(dueDate: boolean) {
    this._has_due_date = dueDate;
  }
  set date(date: Date) {
    this._date = date;
  }
  set hasCompleted(completed: boolean) {
    this._hasCompleted = completed;
  }
}
