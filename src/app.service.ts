import { Injectable } from '@nestjs/common';
import { DummyService } from './dummy/dummy.service';
import { LoggerService } from './logger/logger.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    private readonly DummyService: DummyService,
    private readonly loggerService: LoggerService,
    private readonly configService: ConfigService,
  ) {}

  getHello(): string {
    const messagePrefix = this.configService.get<string>('app.messagePrefix');

    return this.loggerService.log(
      `${messagePrefix} Hello World! ${this.DummyService.getData()}`,
    );
  }
}
