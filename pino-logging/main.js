const logger = require("./services/logger");
const { v4 } = require("uuid");

const firstTransaction = v4();
const secondTransaction = v4();
const thirdTransaction = v4();

const childLogger = logger.child({ requestId: v4() });

process.on("uncaughtException", (err) => {
  childLogger.error(err);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  childLogger.error(err);
  process.exit(1);
});

childLogger.emerg({ transactionId: firstTransaction }, "Hola Moto");
childLogger.fatal({ transactionId: secondTransaction }, "Hola Moto");
childLogger.error({ transactionId: thirdTransaction }, "Hola Moto");
childLogger.alert({ transactionId: firstTransaction }, "Hola Moto");
childLogger.warng({ transactionId: secondTransaction }, "Hola Moto");
childLogger.infor({ transactionId: secondTransaction }, "Hola Moto");
childLogger.debug({ transactionId: firstTransaction }, "Hola Moto");
childLogger.level = "trace";
childLogger.trace({ transactionId: thirdTransaction }, "Hola Moto");

childLogger.infor({ transactionId: thirdTransaction }, "Upload successful!");
childLogger.infor(
  {
    name: "betterstack.com.html",
    mime_type: "text/html",
    transactionId: thirdTransaction,
  },
  "Upload successful!"
);
childLogger.infor(
  { transactionId: thirdTransaction },
  "Upload of file %s (type: %s) is successful!",
  "getpino.io",
  "text/html"
);
childLogger.infor(
  {
    name: "audio.mp3",
    mime_type: "audio/mp3",
    transactionId: firstTransaction,
  },
  "%s: file upload succeeded.",
  "jeshana.mp3"
);
