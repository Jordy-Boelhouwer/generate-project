import dotenv from 'dotenv';
import AppError from '../services/errors/appError';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (envFound.error) {
  throw new AppError(
    'EnvNotFoundError',
    400,
    "⚠️  Couldn't find .env file  ⚠️",
    true
  );
}

export default {
  port: parseInt(process.env.PORT, 10),
  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
};
