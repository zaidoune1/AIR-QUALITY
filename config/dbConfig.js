const mongoose = require("mongoose");

const connectDb = async () => {
  const dbConnect = mongoose.connect(process.env.DB_CONNECTION);

  try {
    if (!dbConnect) throw Error({ error: "data base not found" });

    return await dbConnect;
  } catch (error) {
    throw new Error(message.error);
  }
};

module.exports = connectDb;
