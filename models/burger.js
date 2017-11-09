const orm = require('../config/orm.js');
const connection = require('../config/connection.js');

module.exports = {
  selectAllBurgers: function(req, res){
    orm.selectAll(req, res,`burgers`,"json");
  },
  insertOneBurger: function(burger_name){
    orm.insertOne(`burgers`, `burger_name`, burger_name);
  },
  updateOneBurger: function(id){
    //orm.updateOne(`burgers`, `devoured`, 1, `id`, id);
    connection.query('UPDATE `burgers` SET `devoured` = 1 WHERE `id` = ?', [id], (err, rows) => {
      if (err) throw err;
      console.log("Sucessfully updated value.");
    });
  }
}