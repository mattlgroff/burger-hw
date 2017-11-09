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
  // ,
  // // jawsDB
  // jawsDB: {
  //   port: 3306,
  //   host: "<host name>",
  //   user: "<name of user>",
  //   password: "<password>",
  //   database: "<name of database>"
  // }
};

let connection = mysql.createConnection(
  (process.env.JAWSDB_URL)
  ? process.env.JAWSDB_URL
  : source.localhost);

// if(process.env.JAWSDB_URL){
//   console.log("Using JAWSDB: " + process.env.JAWSDB_URL);
//   let connection = mysql.createConnection(process.env.JAWSDB_URL);
// }
// else{
//   console.log("Using localhost");
//   // we use source.[name of connection] to hook into mysql
// let connection = mysql.createConnection(source.localhost);
// }

connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;

