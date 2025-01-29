import { NodeEnv } from './enums/node-env.enum';

export type AppConfig = {
  nodeEnv: NodeEnv;
  port: number;
};
