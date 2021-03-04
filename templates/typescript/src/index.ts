import express, { Express, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { errorHandler } from './services';
import { IError } from './interfaces';
import { AppError } from './services';

dotenv.config();

const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  throw new AppError('NotFoundError', 404, 'The specified resource could not be found', true);
});

// Error handling middleware, we delegate the handling to the centralized error handler
app.use(async (err: IError, req: Request, res: Response, next: NextFunction) => {
  await errorHandler.handleError(err, res);
});

export default app;
