const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Pass@2026",
    database: "testdb",
  });
  
  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err.message);
      return;
    }
    console.log("Connected to MySQL as id " + connection.threadId);
  
    const createTableQuery = `
      create table IF NOT EXISTS Students(
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(20),
      email VARCHAR(20)
      )`
    
    const createUsersTableQuery = `
     create table IF NOT EXISTS Users(
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(20),
     email VARCHAR(20)
     )`
    
    const createBusTableQuery = `
     create table IF NOT EXISTS Buses(
     id INT AUTO_INCREMENT PRIMARY KEY,
     name varchar(20),
     busNo varchar(20) UNIQUE NOT NULL,
     totalSeats INT,
     availableSeats INT
     )`

    const createStudentTableQuery = `
    create table IF NOT EXISTS StudentDetails(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(20) UNIQUE NOT NULL,
    age INT NOT NULL)`

    // const createBusTableQuery = `
    // create table Bus(
    //   id INT AUTO_INCREMENT PRIMARY KEY,
    //   bus_number INT,
    //   total_seats INT,
    //   available_seats INT
    //   )`
    // const createBookingTableQuery = `
    // create table Booking(
    //   id INT AUTO_INCREMENT PRIMARY KEY,
    //   seat_number INT,
    //   )`
    
    // const createPaymentTableQuery = `
    // create table Payment(
    //   id INT AUTO_INCREMENT PRIMARY KEY,
    //   amount_paid INT,
    //   payent_status VARCHAR(20)
    //   )`
  
    connection.execute(createStudentTableQuery, (err, result) => {
      if (err) {
        console.error("Error creating table:", err.message);
        connection.end();
        return;
      }
      console.log("Table created successfully");
    });
  });

  module.exports = connection;