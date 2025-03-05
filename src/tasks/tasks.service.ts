import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';

//MOCK
const task = new Task();
task.id = 1;
task.author = 'Michał';
task.title = 'No także tak';

const task2 = new Task();
task2.id = 2;
task2.author = 'Michał2';
task2.title = 'A może jednak nie';

@Injectable()
export class TasksService {
  async getTasks(): Promise<Task[]> {
    return [task, task2];
  }
}
