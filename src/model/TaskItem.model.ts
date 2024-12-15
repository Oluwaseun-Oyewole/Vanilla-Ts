export type Priority = "High" | "Medium" | "Low";
export type Effort = "Easy" | "Moderate" | "Hard";
export type Status = "IN-PROGRESS" | "DONE" | "CREATED";

export interface TaskInterface {
  id: string;
  title: string;
  taskPriority: Priority;
  taskEffort: Effort;
  taskStatus: Status;
  hasDueDate?: boolean;
  date: Date;
}

export default class TaskItem implements TaskInterface {
  constructor(
    private _id = "",
    private _title = "",
    private _task_priority: Priority = "Low",
    private _task_effort: Effort = "Easy",
    private _task_status: Status = "CREATED",
    private _has_due_date = false,
    private _date = new Date()
  ) {}

  //   getters
  get id() {
    return this._id;
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
  set id(id: string) {
    this._id = id;
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
}
