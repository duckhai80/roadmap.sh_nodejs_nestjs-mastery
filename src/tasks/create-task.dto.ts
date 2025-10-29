import { TaskStatus } from './tasks.model';

export interface CreateTaskDto {
  title: string;
  description: string;
  status: TaskStatus;
}
