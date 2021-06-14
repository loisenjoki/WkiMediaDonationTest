# WikimediaDonationTest
## Features
- MySQL database
- Node js server Express
- use NPM
- Unit test with Mocha & Chai
- currency conversion service from link https://free.currencyconverterapi.com/

## Getting started
git clone https://github.com/loisenjoki/wikimediaDonationTest
on the directory folder run
```
npm install
```
## MySQL Database setup
mysql CREATE DATABASE donations_db
###create table
```
CREATE TABLE IF NOT EXISTS tbl_donors(
    id INT(100) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
    first_name text  NOT NULL,last_name text  NOT NULL,street_address text  NOT NULL,
    city varchar(255) NOT NULL,state_region varchar(255) NOT NULL,
    country varchar(255) NOT NULL,postal_code varchar(16) NOT NULL,
    phone_number varchar(255) NOT NULL, email varchar(50) NOT NULL,UNIQUE KEY unique_email (email),
    preferred_contact varchar(16) NOT NULL,preferred_payment varchar(255) NOT NULL,
    donation_frequency varchar(16) NOT NULL,donation_amount decimal(9,3) NOT NULL,
    comments text DEFAULT NULL
);
```
or import donors_tbl.sql file into your MySQL database
#### run the project ``` npm start ```
