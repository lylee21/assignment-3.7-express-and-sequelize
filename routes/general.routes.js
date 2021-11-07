const express = require('express');
const VehicleController = require('../controllers/vehicle.controller');
const router = express.Router();

router.get("/general", (req, res) => {
    return res.send("You have called a general route");
});

router.get("/general/vehicle", async (req, res) => await vehicleController.getVehicle(req,res));

module.exports = router;