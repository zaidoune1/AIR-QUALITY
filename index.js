const express = require("express");
require("dotenv").config();
const router = require("./routes/airQualityRoute");

const app = express();

app.use(express.json());

const PORT = process.env.PORT_URI || 5000;

app.use("/api/air-quality/", router);

app.listen(PORT, () => {
  console.log(`success connection in port ${PORT}`);
});
