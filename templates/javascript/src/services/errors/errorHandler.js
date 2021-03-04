import Logger from '../logger';

const crashIfUntrustedErrorOrSendResponse = (error, response) => {
  if (!error.isOperational) {
    process.exit(1);
  }

  response.status(error.httpCode).json(error);
};

class ErrorHandler {
  constructor() {
    this.handleError = async (error, response) => {
      Logger.error(error);
      crashIfUntrustedErrorOrSendResponse(error, response);
    };
  }
}

export default ErrorHandler;
