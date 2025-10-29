import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateTaskDto } from './create-task.dto';
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
  public findOne(@Param('id') id: string) {
    const task = this.tasksService.findOne(id);

    if (!task) {
      throw new NotFoundException();
    }

    return task;
  }

  @Post()
  public create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }
}
