import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks: string[] = ['Task 1', 'Task 2', 'Task 3'];
}
