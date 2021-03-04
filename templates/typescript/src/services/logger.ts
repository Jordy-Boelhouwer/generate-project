import winston from 'winston';
import config from '../config';

const transports = [];

if (process.env.NODE_ENV !== 'development') {
  transports.push(
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' })
  );
} else {
  transports.push(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.cli(),
        winston.format.splat()
      )
    }),
    new winston.transports.File({ filename: 'error.log', level: 'error' })
  );
}

const LoggerInstance: winston.Logger = winston.createLogger({
  level: config.logs.level,
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  transports
});

export default LoggerInstance;
