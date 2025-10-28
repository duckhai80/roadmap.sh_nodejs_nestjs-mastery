import { Injectable } from '@nestjs/common';
import { DummyService } from './dummy/dummy.service';
import { LoggerService } from './logger/logger.service';

@Injectable()
export class AppService {
  constructor(
    private readonly DummyService: DummyService,
    private readonly loggerService: LoggerService,
  ) {}

  getHello(): string {
    return this.loggerService.log(
      `Hello World! ${this.DummyService.getData()}`,
    );
  }
}
