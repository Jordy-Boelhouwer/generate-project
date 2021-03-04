import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { AppError, ErrorHandler } from './services/errors';

const app = express();

app.enable('trust proxy', 1);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(limiter);
app.use(helmet());

app.get('/', (req, res, next) => {
  throw new AppError(
    'NotFoundError',
    404,
    'The specified resource could not be found',
    true
  );
});

// Error handling middleware, we delegate the handling to the centralized error handler
app.use(async (err, req, res, next) => {
  const errorHandler = new ErrorHandler();
  await errorHandler.handleError(err, res);
});

export default app;
