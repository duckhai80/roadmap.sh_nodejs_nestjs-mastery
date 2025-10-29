import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateTaskDto } from './create-task.dto';
import { Task } from './tasks.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: string): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  create(CreateTaskDto: CreateTaskDto): Task {
    const task: Task = {
      id: randomUUID(),
      ...CreateTaskDto,
    };

    this.tasks.push(task);

    return task;
  }
}
