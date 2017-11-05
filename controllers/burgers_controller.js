const orm = require('../config/orm.js');

module.exports = {
  allBurgers: function(req, res) {
    orm.selectAll(req, res, `burgers`, "render");
  },
}