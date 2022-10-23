export const TASK_TYPE = Object.freeze({
  IMMEDIATELY: "immediately",
  IMPORTANT: "important",
  ORDINARY: "ordinary",
  INSIGNIFICANT: "insignificant",
});

export const TASK_STATUS = Object.freeze({
  COMPLETED: 'completed',
  UNCOMPLETED: 'uncompleted',
});

export class Task {
  constructor() {
    this.title = "";
    this.description = "";
    this.type = TASK_TYPE.INSIGNIFICANT;
    this.status = TASK_STATUS.UNCOMPLETED;
  }
}
