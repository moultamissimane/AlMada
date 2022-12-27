const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

const connectDB = async () => {
  const conn = await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
}
  
  console.log(`MongoDB Connected: ${conn.connection.host}`);