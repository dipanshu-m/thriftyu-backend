const { log } = require('console');
const express = require('express');
const mongoose = require('mongoose');
const { config } = require('dotenv');
config();

const authRouter = require('./routes/AuthRoutes');

const app = express();

// middlewares
app.use('/auth/', authRouter);

// routes
app.get(
  '/',
  (req, res, next) => {
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
  .catch((err) => {
    log(err);
  });
