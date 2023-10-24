const express = require("express");
require("dotenv").config();
const cron = require("node-cron");
const router = require("./routes/airQualityRoute");
const connectDb = require("./config/dbConfig");
const verifiedAirInParis = require("./config/Util/airQualityInParis");

const app = express();

app.use(express.json());

connectDb();

const PORT = process.env.PORT_URI || 5000;

app.use("/api/air-quality/", router);

cron.schedule("*/1 * * * *", () => {
  try {
    verifiedAirInParis();
  } catch (error) {
    console.error("Une erreur s'est produite :", error.message);
  }
});

app.listen(PORT, () => {
  console.log(`success connection in port ${PORT}`);
});
