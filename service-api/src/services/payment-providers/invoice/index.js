/**
 * Manual invoice "payment provider"
 *
 * All that this does is to allow an unpaid cart
 * to be stored in Crystallize
 */
const importSync = require('import-sync');
const createCrystallizeOrder = importSync("./create-crystallize-order");

module.exports = {
  enabled: true,
  frontendConfig: {},
  createCrystallizeOrder,
};
