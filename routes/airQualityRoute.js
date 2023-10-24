const express = require("express");
const airQualityController = require("../controllers/airQualityController");

const router = express.Router();

router.route("/").get(airQualityController.getCoordinates);
router.route("/mostp-polluted").get(airQualityController.handelmostPolluted);
router.route("/deleted").delete(airQualityController.handelDelete);

module.exports = router;
