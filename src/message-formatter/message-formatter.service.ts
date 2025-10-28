import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageFormatterService {
  constructor() {}

  format(message: string): string {
    const formatted = `${new Date().toISOString().replace('T', ' ').substring(0, 19)}`;

    return `[${formatted}] ${message}`;
  }
}
