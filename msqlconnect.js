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


/*
CREATE TABLE IF NOT EXISTS tbl_test(
    id INT(100) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
    first_name text  NOT NULL,last_name text  NOT NULL,street_address text  NOT NULL,
    city varchar(255) NOT NULL,state_region varchar(255) NOT NULL,
    country varchar(255) NOT NULL,postal_code varchar(16) NOT NULL,
    phone_number varchar(255) NOT NULL, email varchar(50) NOT NULL,UNIQUE KEY unique_email (email),
    preferred_contact varchar(16) NOT NULL,preferred_payment varchar(255) NOT NULL,
    donation_frequency varchar(16) NOT NULL,donation_amount decimal(9,3) NOT NULL,
    comments text DEFAULT NULL
);*/

