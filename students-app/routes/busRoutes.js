const express = require('express');
const router = express.Router();

// controllers
const busController = require('../controllers/busController');

router.post('/add-user', busController.addUser);
router.get('/get-users', busController.getUsers);
router.post('/add-bus', busController.addBus);
router.get('/buses/available/:seats', busController.getBusOnAvailableSeats);

module.exports = router;