const pino = require("pino");
const levels = {
  http: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60,
};
/* 
const levels = {
  emerg: 80,
  fatal: 70,
  error: 60,
  alert: 50,
  warng: 40,
  infor: 30,
  debug: 20,
  trace: 10,
};

const streams = Object.keys(levels).map((level) => ({
  level: level,
  stream: pino.destination({
    dest: `${__dirname}/logs/app-${level}.log`,
    sync: false,
  }),
}));
 */

const streams = [
  { stream: process.stdout },
  { stream: pino.destination(`./logs/app.log`), level: "http" },
  {
    stream: pino.destination(`./logs/tmp.log`),
    level: "info",
  },
];

module.exports = pino(
  {
    level: "http",
    customLevels: levels,
    useOnlyCustomLevels: true,
    formatters: {
      level: (label) => ({ level: label.toUpperCase() }),
    },
    prettyPrint: {
      colorize: true,
      levelFirst: true,
      translateTime: "yyyy-mm-dd, hh:MM:ss TT",
    },
  },
  pino.multistream(streams)
);
