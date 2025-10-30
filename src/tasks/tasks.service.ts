import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateTaskDto } from './create-task.dto';
import { WrongTaskStatusException } from './exceptions/wrong-task-status.exception';
import { Task, TaskStatus } from './tasks.model';
import { UpdateTaskDto } from './update-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: string): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  create(createTaskDto: CreateTaskDto): Task {
    const task: Task = {
      id: randomUUID(),
      ...createTaskDto,
    };

    this.tasks.push(task);

    return task;
  }

  update(task: Task, updateTaskDto: UpdateTaskDto): Task {
    if (
      updateTaskDto.status &&
      !this.isValidStatusTransition(task.status, updateTaskDto.status)
    ) {
      throw new WrongTaskStatusException();
    }

    Object.assign(task, updateTaskDto);

    return task;
  }

  remove(task: Task): void {
    this.tasks = this.tasks.filter(
      (filteredTask) => filteredTask.id !== task.id,
    );
  }

  private isValidStatusTransition(
    currentStatus: TaskStatus,
    newStatus: TaskStatus,
  ): boolean {
    const statusOrder = [
      TaskStatus.OPEN,
      TaskStatus.IN_PROGRESS,
      TaskStatus.DONE,
    ];

    return statusOrder.indexOf(currentStatus) <= statusOrder.indexOf(newStatus);
  }
}
