const axios = require("axios");
const axiosGetResponse = async (api) => {
  try {
    return await axios.get(api, {
      headers: {
        Authorization: `Bearer ${process.env.APIKEY}`,
      },
    });
  } catch (error) {
    throw Error(error.message);
  }
};

module.exports = axiosGetResponse;
