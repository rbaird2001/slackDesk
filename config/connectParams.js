const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "bootcampdb.cnt2iobbptak.us-east-2.rds.amazonaws.com",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "admin",

  // Your password
  password: "AwV52riYYI7OGl9kJsAE",
  database: "desk"
});

module.exports = connection;