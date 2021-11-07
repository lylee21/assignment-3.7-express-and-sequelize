// Import
const vehicleService = require("../services/vehicle.service");

class VehicleController {
  // POST /protected/onboard {driverId:1, vehicleId:1}
  async onboard(req, res) {

    console.log(typeof req.body.driverId, typeof req.body.vehicleId);
    if (
      typeof req.body.driverId !== "number" ||
      typeof req.body.vehicleId !== "number"
    ) {
      res.status(400); // bad request
      return res.json({ message: "Incorrect request data" });
    }

    // Consume the service layer
    const result = await vehicleService.onboard(req.body.vehicleId, req.body.driverId);    
    res.status(result.status);

    // Return results from service
    return res.json({ data: result.data, message: result.message });
  }
  
  // POST /protected/offboard {driverId:1, vehicleId:1}
  async offboard(req, res) {

    console.log(typeof req.body.driverId, typeof req.body.vehicleId);
    if (
      typeof req.body.driverId !== "number" ||
      typeof req.body.vehicleId !== "number"
    ) {
      res.status(400); // bad request
      return res.json({ message: "Incorrect request data" });
    }

    // Consume the service layer
    const result = await vehicleService.offboard(req.body.vehicleId, req.body.driverId);    
    res.status(result.status);

    // Return results from service
    return res.json({ data: result.data, message: result.message });
  }

  // PUT /protected/vehicle //update vehicle information (except id).
  async updateVehicle(req, res) {

    console.log(typeof req.body.vehicleId);
    if (
      typeof req.body.vehicleId !== "number"
    ) {
      res.status(400); // bad request
      return res.json({ message: "Invalid Vehicle ID" });
    }

    // Consume the service layer
    const result = await vehicleService.vehicle(req.body.vehicleId, req.body.driverId);    
    res.status(result.status);

    // Return results from service
    return res.json({ data: result.data, message: result.message });
  }
  // PUT /protected/driver/:driverId //Before deleting a driver, ensure that the driver is not currently onboard any vehicle.
  async delete(req, res) {

    console.log(typeof req.body.driverId, typeof req.body.vehicleId);
    if (
      typeof req.body.driverId !== "number" ||
      typeof req.body.vehicleId !== "number"
    ) {
      res.status(400); // bad request
      return res.json({ message: "Incorrect request data" });
    }

    // Consume the service layer
    const result = await vehicleService.vehicle(req.body.vehicleId, req.body.driverId);    
    res.status(result.status);

    // Return results from service
    return res.json({ data: result.data, message: result.message });
  }

  async getVehicle(req, res) {

    console.log(typeof req.body.driverId, typeof req.body.vehicleId);
    if (
      typeof req.body.driverId !== "number" ||
      typeof req.body.vehicleId !== "number"
    ) {
      res.status(400); // bad request
      return res.json({ message: "Incorrect request data" });
    }

    // Consume the service layer
    const result = await vehicleService.onboard(req.body.vehicleId, req.body.driverId);    
    res.status(result.status);

    // Return results from service
    return res.json({ data: result.data, message: result.message });
  }
}

module.exports = VehicleController;