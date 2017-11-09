const mysql = require("mysql");

const source = {
  // localhost
  localhost: {
    port: 3306,
    host: "localhost",
    user: "root",
    password: process.env.mysql_pw,
    database: "burgers_db"
  }
};

//If JAWSDB, use JAWSDB. Otherwise, use localhost.
const connection = mysql.createConnection(
  (process.env.JAWSDB_URL)
  ? process.env.JAWSDB_URL
  : source.localhost);


connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);

  connection.query('CREATE TABLE IF NOT EXISTS `burgers`(`id` int auto_increment primary key not null,`burger_name` varchar(60) not null,`devoured` boolean not null default 0,`date` timestamp default current_timestamp)'), err => {
    if(err) console.error(err);
  }

});


module.exports = connection;

