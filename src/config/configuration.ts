import { config } from 'dotenv';
config();
import * as constants from '../libs/constants';
import { IConfig } from './IConfig';

const envVars: NodeJS.ProcessEnv = process.env;
/* tslint:disable:no-var-requires */
const version = require('../../package.json').version;
const isMongooseDebug =
  envVars.NODE_ENV === constants.EnvVars.DEV;
const configurations = Object.freeze({
  apiPrefix: constants.API_PREFIX,
  duration: envVars.DURATION || '30',
  endHour: envVars.END_HOUR || '17:00',
  env: envVars.NODE_ENV || 'dev',
  mongo: envVars.MONGO_URL || 'mongodb+srv://m001-user:NvncCBKYQfCnQQS5@cluster0.adkbi.mongodb.net/appointment-db',
  mongooseDebug: isMongooseDebug,
  port: envVars.PORT || '9000',
  startHour: envVars.START_HOUR || '10:00',
  swaggerDefinition: {
    basePath: constants.API_PREFIX,
    info: {
      ...constants.ABOUT,
      version,
    },
    securityDefinitions: {
      Bearer: {
        in: constants.ABOUT.in,
        name: constants.ABOUT.name,
        type: constants.ABOUT.type,
      },
    },
  },
  swaggerUrl: constants.SWAGGER_URL,
  timezone: envVars.TIMEZONE || 'America/Los_Angeles',
}) as IConfig;

export default configurations;
