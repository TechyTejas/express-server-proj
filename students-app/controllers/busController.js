const { Users, Buses } = require('../models/bus-users');
const { Op } = require('sequelize');

const addUser = async (req, res) => {
    try {
    const {name,email} = req.body;
    const user = await Users.create({
        name: name,
        email: email,
    });
    console.log(`User ${name} added successfully`);
    res.status(200).send(`User ${user.name} added successfully`);
   } catch (err) {
    console.log(err.message);
    res.status(500).send("Error while adding the user");
    return;
   }
}

const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll();
        console.log("users fetched successfully");
        res.status(200).send(users);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error while fetching the users");
        return;
    }
}
const addBus = async (req, res) => {
    try {
        const {name, busNo, totalSeats, availableSeats} = req.body;
        const bus = await Buses.create({
            name: name,
            busNo: busNo,
            totalSeats: totalSeats,
            availableSeats: availableSeats,
        });
        console.log(`Bus ${name} added successfully`);
        res.status(200).send(`Bus ${bus.name} added successfully`);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error while adding the bus details");
        return;
    }
}

const getBusOnAvailableSeats = async (req, res) => {
   try{
    const seats = req.params.seats;
    const buses = await Buses.findAll({
        where: {
            availableSeats: {
             [Op.gte]: parseInt(seats),
            },
        },
    });
    if(buses.length === 0){
        res.status(404).send("No buses found with available seats");
        return;
    }
    console.log(`buses with available seats ${seats} fetched successfully`);
    res.status(200).send(buses);
   } catch (err) {
    console.log(err.message);
    res.status(500).send("Error while fetching the buses with available seats");
    return;
   }
}
module.exports = {
    addUser,
    getUsers,
    addBus,
    getBusOnAvailableSeats,
}