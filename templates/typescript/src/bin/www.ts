import app from '../index';
import { Logger } from '../services';
import config from '../config';

const startServer = async () => {
  app
    .listen(config.port, () => {
      Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
    })
    .on('error', (err) => {
      Logger.error(err);
      process.exit(1);
    });
};

startServer();
