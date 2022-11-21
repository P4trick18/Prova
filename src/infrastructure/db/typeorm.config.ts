import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

import AppConfig from '../../config/app.config';

export default class TypeOrmConfig {
  static getOrmConfig(appConfig: AppConfig): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: appConfig.dbHost,
      port: appConfig.dbPort,
      username: appConfig.dbUserName,
      password: appConfig.dbPassword,
      database: appConfig.dbName,
      // entities: [],//
      synchronize: false,
      logging: true,
    };
  }
}

export const TypeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  useFactory: async (appConfig: AppConfig): Promise<TypeOrmModuleOptions> =>
    TypeOrmConfig.getOrmConfig(appConfig),
  inject: [AppConfig],
};
