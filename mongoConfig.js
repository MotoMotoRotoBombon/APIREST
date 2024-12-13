const mongoose = require('mongoose');
require('dotenv').config(); // Carga las variables

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection failed ", error);
  }
}

module.exports = connectDB;
