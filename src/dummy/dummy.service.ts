import { Injectable } from '@nestjs/common';

@Injectable()
export class DummyService {
  constructor() {}

  getData(): string {
    return 'Dummy Data';
  }
}
