const connection = require('./connection.js');

module.exports = {
  selectAll: function(req, res, table_name, type) {
    connection.query('SELECT * FROM ??', [table_name], (err, rows) => {
      if (err) throw err;
      if(type === "json") res.json(rows);
      if(type === "render") res.render("index",{all:rows});
      console.log("Sent response.");
    });
  },
  insertOne: function(table_name, value, burger_name){
    connection.query('INSERT INTO ?? (??) VALUES (?)', [table_name,value,burger_name], (err, rows) => {
      if (err) throw err;
      console.log("Sucessfully added value of " + burger_name + " to " + table_name + ".");
    });
  },
  updateOne: function(table_name, column, value, id_column, id){
    //UPDATE `burgers` SET `devoured` = 1 WHERE `id` = 1;
    connection.query('UPDATE ?? SET ? = ? WHERE ? = ?', [table_name,column,value,id_column,id], (err, rows) => {
      if (err) throw err;
      console.log("Sucessfully updated value.");
    });
  }
}