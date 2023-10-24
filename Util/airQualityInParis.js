const airQualityModel = require("../models/airQualityModel");
const axiosGetResponse = require("./getAxiosData");

const verifiedAirInParis = async () => {
  const latitude = 48.856613;
  const longitude = 2.352222;
  try {
    const responseDataParis = await axiosGetResponse(
      `http://api.airvisual.com/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=${process.env.APIKEY}`
    );

    const dataObjecParist = responseDataParis.data.data;

    const newAirQualityModel = new airQualityModel({
      city: dataObjecParist.city,
      aqius: dataObjecParist.current.pollution.aqius,
      mainus: dataObjecParist.current.pollution.mainus,
      aqicn: dataObjecParist.current.pollution.aqicn,
      maincn: dataObjecParist.current.pollution.maincn,
    });

    await newAirQualityModel.save();
  } catch (error) {
    throw Error(error.message);
  }
};

module.exports = verifiedAirInParis;
