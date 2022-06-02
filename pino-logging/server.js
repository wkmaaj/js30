const express = require("express");
const mongoose = require("mongoose");
const expressPinoLogger = require("express-pino-logger");
const foodRouter = require("./routes/food-routes.js");
const logger = require("./services/logger");

const app = express();
const loggerMiddleware = expressPinoLogger({
  logger: logger,
  autoLogging: true,
});

app.use(express.json());
app.use(loggerMiddleware);

mongoose.connect(
  "mongodb://admin:pwd123@localhost:27017/PINOLOG?authSource=admin&readPreference=primary&appname=pinolog&retryWrites=true&writeConcern=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(foodRouter);
app.listen(3000, () => true);
