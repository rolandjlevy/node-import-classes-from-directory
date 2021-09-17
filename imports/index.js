const fs = require('fs');
const path = require('path');
const currentFile = path.basename(__filename);

module.exports = (() => {
  return fs.readdirSync(__dirname)
    .reduce((acc, item) => {
      if (item !== currentFile && path.extname(item) === '.js') {
        const key = path.basename(item, '.js');
        acc[key] = require(`./${key}`);
      }
      return acc;
    }, {});
})();