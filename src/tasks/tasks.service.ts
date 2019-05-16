import { Injectable } from "@nestjs/common";
import { Task } from './interfaces/task.interface';

@Injectable()
export class TasksService {
  private readonly tasks: Task[] = [];
  create(task: Task): Task {
    this.tasks.push(task);
    return task;
  }
  findAll(): Task[] {
    return this.tasks;
  }
}