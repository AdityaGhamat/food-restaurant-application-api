const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_LINK);
    console.log("Connected successfully to database");
  } catch (error) {
    throw error;
  }
};

module.exports = {
  dbConnection,
};
