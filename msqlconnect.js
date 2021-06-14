const mysql = require('mysql2');

// creating connection for mysql DB
const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'donations_db',
  multipleStatements: true
});

mysqlConnection.connect((err) => {
  if (err) return console.error('error: ' + err.message);
  console.log('success..! connected to the MySQL DB.');
});

module.exports = mysqlConnection;

