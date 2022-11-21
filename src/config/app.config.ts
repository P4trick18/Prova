import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export default class AppConfig {
  constructor(private configService: ConfigService) {}

  get dbHost(): string {
    return this.configService.get<string>('DB_HOST');
  }

  get dbUserName(): string {
    return this.configService.get<string>('DB_USERNAME');
  }

  get dbPassword(): string {
    return this.configService.get<string>('DB_PASSWORD');
  }

  get dbName(): string {
    return this.configService.get<string>('DB_NAME');
  }

  get dbPort(): number {
    return this.configService.get<number>('DB_PORT');
  }
}
