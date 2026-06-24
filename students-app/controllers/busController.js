const db = require('../static/js/utils/db-connection');

const addUser = (req, res) => {
    const {name,email} = req.body;
    const insertQuery = 'INSERt INTO users (name,email) VALUES (?,?)'
    db.execute(insertQuery, [name, email], (err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send("Error while adding the user");
            db.end();
        }
        console.log("User added successfully");
        res.status(200).send(`User with name ${name} and email ${email} added successfully`);
    })
}

const getUsers = (req, res) => {
    const getQuery = `SELECT * FROM Users`;
    db.execute(getQuery, (err, results)=>{
        if(err){
            console.log(err.message);
            res.status(500).send("Error while fetching the users");
            db.end();
        }
        if(results.length === 0){
            res.status(404).send("No users found");
            db.end();
            return;
        }
        console.log("Users fetched successfully");
        res.status(200).send(results);
    })
}
const addBus = (req, res) => {
    const {name, busNo, totalSeats, availableSeats} = req.body;
    const insertQuery = 'INSERT INTO Buses (name, busNo, totalSeats, availableSeats) VALUES (?, ?, ?, ?)'
    db.execute(insertQuery, [name, busNo, totalSeats, availableSeats], (err, results)=>{
        if(err){
            console.log(err.message);
            res.status(500).send("Error while adding the bus details");
            db.end();
        }
        console.log("Bus details added successfully");
        res.status(200).send(`Bus with name ${name} and busNo ${busNo} added successfully`);
    })
}

const getBusOnAvailableSeats = (req, res) => {
    const seats = req.params.seats;
    const filterOnAvailableSeats = `SELECT * FROM Buses WHERE availableSeats > ${seats}`;
    db.execute(filterOnAvailableSeats, (err, results)=>{
        if(err){
            console.log(err.message);
            res.status(500).send("Error while fetching the buses with available seats");
            db.end();
        }
        if(results.length === 0){
            res.status(404).send("No buses found with available seats");
            db.end();
            return;
        }
        console.log("Buses with available seats fetched successfully");
        res.status(200).send(results);
    })
}
module.exports = {
    addUser,
    getUsers,
    addBus,
    getBusOnAvailableSeats,
}