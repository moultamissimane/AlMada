const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;