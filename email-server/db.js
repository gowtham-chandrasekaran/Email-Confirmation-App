var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "scriptchain",
  port: 3306,
});

function store(to) {
  connection.query(
    // Insert into the created table
    "INSERT INTO emails (emailid) VALUES (?);",[to],
    function (error, results, fields) {
      if (error) throw error;
        console.log("1 record inserted");
    }
  );
}

module.exports = { store };
