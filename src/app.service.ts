import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from './config/app.config';
import { ConfigType } from './config/config.type';
import { DummyService } from './dummy/dummy.service';
import { LoggerService } from './logger/logger.service';

@Injectable()
export class AppService {
  constructor(
    private readonly DummyService: DummyService,
    private readonly loggerService: LoggerService,
    private readonly configService: ConfigService<ConfigType>,
  ) {}

  getHello(): string {
    const messagePrefix =
      this.configService.get<AppConfig>('app')?.messagePrefix;

    return this.loggerService.log(
      `${messagePrefix} Hello World! ${this.DummyService.getData()}`,
    );
  }
}
