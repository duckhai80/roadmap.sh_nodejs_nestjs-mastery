import { Controller, Get, Param } from '@nestjs/common';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  public findAll(): Task[] {
    return this.tasksService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string): Task | undefined {
    return this.tasksService.findOne(id);
  }
}
