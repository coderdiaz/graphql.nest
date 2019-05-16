import { Resolver, Mutation, Args, Query } from "@nestjs/graphql";
import { TasksService } from "./tasks.service";
import { Task } from "./interfaces/task.interface";

@Resolver('Tasks')
export class TasksResolver {
  constructor(
    private readonly taskService: TasksService
  ) {}

  @Query('getTasks')
  async getTasks() {
    return this.taskService.findAll();
  }

  @Mutation()
  async createTask(@Args('title') title: string, @Args('description') description: string): Promise<Task> {
    const task: Task = {
      id: Math.random(),
      title,
      description,
      publishedAt: Date.now().toString(),
    };
    this.taskService.create(task);
    return task;
  }
}