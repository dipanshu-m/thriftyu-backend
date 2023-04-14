import { log } from 'console';
import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
config();

import authRouter from './routes/AuthRoutes';

const app: express.Application = express();

// middlewares
app.use('/auth', authRouter);

// routes
app.get(
  '/',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send('server working');
  }
);

// server setup
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URI}/test`
  )
  .then(() => {
    log('db connected');

    const PORT = process.env.PORT || 3500;
    app.listen(PORT, () => {
      log('server connected to port', PORT);
    });
  })
  .catch((err: mongoose.Error) => {
    log(err);
  });
