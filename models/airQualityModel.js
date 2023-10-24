const mongoose = require("mongoose");

const airQualityCity = new mongoose.Schema(
  {
    city: String,
    aqius: Number,
    mainus: String,
    aqicn: Number,
    maincn: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("AirQualityCity", airQualityCity);
