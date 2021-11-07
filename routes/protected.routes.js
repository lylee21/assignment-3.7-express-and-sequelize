// Import
const express = require('express');
const router = express.Router();
const VehicleController = require("../controllers/vehicle.controller");

// Instantiate the class
const vehicleController = new VehicleController();

router.get("/protected", (req, res) => {
    return res.send("You have called a protected route");
});

// Invoke onboard() in VehicleController based on the route
//(req, res) => to bind to avoid issues
router.post("/protected/onboard", async (req, res) => await vehicleController.onboard(req, res));
router.post("/protected/offboard", async (req, res) => await vehicleController.offboard(req, res));
// router.put("/protected/vehicle", async (req, res) => await vehicleController.updateVehicle(req, res));
// router.delete("/protected/driver/:driverId", async (req, res) => await vehicleController.delete(req,res));

module.exports = router;