const logger = require("./logger");

const chainwheelSizes = [33, 35, 36, 37, 38, 40, 42, 44, 46, 48, 50];
chainwheelSizes.forEach((chainwheelSize) => {
  const cassetteOpts = {
    T1026: [10, 11, 12, 13, 14, 15, 16, 17, 19, 21, 23, 26],
    T1028: [10, 11, 12, 13, 14, 15, 16, 17, 19, 21, 24, 28],
    T1030: [10, 11, 12, 13, 14, 15, 17, 19, 21, 24, 27, 30],
    T1033: [10, 11, 12, 13, 14, 15, 17, 19, 21, 24, 28, 33],
    T1044: [10, 11, 13, 15, 17, 19, 21, 24, 28, 32, 38, 44],
  };
  Object.keys(cassetteOpts).forEach((key) => {
    const gearCombination = `${chainwheelSize}T / (${cassetteOpts[key][0]}-${
      cassetteOpts[key][cassetteOpts[key].length - 1]
    }T)`;
    const gearRatios = [];
    cassetteOpts[key].forEach((cassetteOpt) =>
      gearRatios.push(chainwheelSize / cassetteOpt)
    );
    logger.info(
      `${gearCombination}\n${JSON.stringify(
        gearRatios.sort((a, b) => (a < b ? -1 : 1))
      )}`
    );
  });
});
