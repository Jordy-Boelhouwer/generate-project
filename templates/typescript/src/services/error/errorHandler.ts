import logger from '../logger';
import { IError } from '../../interfaces';
import { Response } from 'express';

const crashIfUntrustedErrorOrSendResponse = async (
  error: IError,
  response: Response
) => {
  if (!error.isOperational) {
    process.exit(1);
  }

  response.status(error.httpCode).json(error);
};

class ErrorHandler {
  public async handleError(
    error: IError,
    responseStream: Response
  ): Promise<void> {
    logger.error(error);
    await crashIfUntrustedErrorOrSendResponse(error, responseStream);
  }
}

export default new ErrorHandler();
