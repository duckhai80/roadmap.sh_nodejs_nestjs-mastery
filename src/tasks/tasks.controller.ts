import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTaskDto } from './create-task.dto';
import { FindOneParams } from './find-one.params';
import type { Task } from './tasks.model';
import { TasksService } from './tasks.service';
import { UpdateTaskStatusDto } from './update-task-status.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  public findAll(): Task[] {
    return this.tasksService.findAll();
  }

  @Get(':id')
  public findOne(@Param() params: FindOneParams): Task {
    const task = this.findOneOrFail(params.id);

    return task;
  }

  @Post()
  public create(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.create(createTaskDto);
  }

  @Patch(':id/status')
  public updateStatus(
    @Param() params: FindOneParams,
    @Body() body: UpdateTaskStatusDto,
  ): Task {
    const task = this.findOneOrFail(params.id);

    task.status = body.status;

    return task;
  }

  private findOneOrFail(id: string): Task {
    const task = this.tasksService.findOne(id);

    if (!task) {
      throw new NotFoundException();
    }

    return task;
  }
}
