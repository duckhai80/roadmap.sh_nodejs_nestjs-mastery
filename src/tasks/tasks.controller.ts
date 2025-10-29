import { Controller, Get, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  public findAll(): string[] {
    return ['Task 1', 'Task 2', 'Task 3'];
  }

  @Get(':id')
  public findOne(@Param('id') id: string): string {
    return `Task ${id}`;
  }
}
