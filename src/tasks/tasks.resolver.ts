import { Resolver, Query } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Resolver(() => Task)
export class TasksResolver {
  constructor(private taskskService: TasksService) {}

  @Query(() => [Task])
  tasks(): Promise<Task[]> {
    return this.taskskService.getTasks();
  }
}
