const axios = require("axios");

const getCoordinates = async (req, res) => {
  const { latitude, longitude } = req.query;

  try {
    if (!latitude || !longitude)
      throw new Error("Latitude and longitude are required");

    const responseData = await axios.get(
      `http://api.airvisual.com/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=${process.env.APIKEY}`,

      {
        headers: {
          Authorization: `Bearer ${process.env.APIKEY}`,
        },
      }
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

    return res.json(newResponseData);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCoordinates,
};
