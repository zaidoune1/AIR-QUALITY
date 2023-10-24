const axiosGetResponse = require("../config/Util/getAxiosData");
const airQualityModel = require("../models/airQualityModel");

const getCoordinates = async (req, res) => {
  const { latitude, longitude } = req.query;

  try {
    if (!latitude || !longitude)
      throw new Error("Latitude and longitude are required");

    const responseData = await axiosGetResponse(
      `http://api.airvisual.com/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=${process.env.APIKEY}`
    );

    const dataObject = responseData.data.data;

    const newResponseData = {
      result: {
        pollution: {
          ts: dataObject.current.pollution.ts,
          aqius: dataObject.current.pollution.aqius,
          mainus: dataObject.current.pollution.mainus,
          aqicn: dataObject.current.pollution.aqicn,
          maincn: dataObject.current.pollution.maincn,
        },
      },
    };

    return res.status(200).json(newResponseData);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const handelmostPolluted = async (req, res) => {
  const findMostPolluted = await airQualityModel
    .findOne({ city: "Paris" })
    .sort({ aqius: -1 });
  try {
    if (!findMostPolluted)
      return res.status(404).json({ message: "request not found" });

    res.status(200).json(findMostPolluted);
  } catch (error) {
    console.error("Une erreur s'est produite :", error.message);
    res.status(500).json({ message: "Erreur du serveur" });
  }
};

const handelDelete = async (req, res) => {
  const findDeleted = await airQualityModel.deleteMany({ city: "Paris" });

  try {
    if (findDeleted?.deletedCount === 0) return res.json("all items deleted");

    if (!findDeleted) return res.json("bad request");

    return res.json(findDeleted);
  } catch (error) {
    throw Error({ error: error.message });
  }
};

module.exports = {
  getCoordinates,
  handelmostPolluted,
  handelDelete,
};
