const importSync = require('import-sync');
const create = importSync("./create-customer");
const update = importSync("./update-customer");
const get = importSync("./get-customer");

module.exports = {
  create,
  update,
  get,
};
