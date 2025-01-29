import { PostgresConfig } from './postres/postgres-config.type';
import { AppConfig } from './app/app-config.type';

export type AllConfigType = {
  app: AppConfig;
  postgres: PostgresConfig;
};
