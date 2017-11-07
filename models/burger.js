const orm = require('../config/orm.js');

module.exports = {
  selectAllBurgers: function(req, res){
    orm.selectAll(req, res,`burgers`,"json");
  },
  insertOneBurger: function(burger_name){
    orm.insertOne(`burgers`, `burger_name`, burger_name);
  },
  updateOneBurger: function(id){
    orm.updateOne(`burgers`, `devoured`, 1, `id`, id);
  }
}