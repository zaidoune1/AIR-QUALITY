const express = require("express");
const airQualityController = require("../controllers/airQualityController");

const router = express.Router();

router.route("/").get(airQualityController.getCoordinates);

module.exports = router;
