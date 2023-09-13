// server.js
//connection 
const mongoose = require("mongoose");


const main = async () => {
  try {
    const connect = await mongoose.connect(
        "mongodb+srv://jereg42880:3lrrIkYNjMFbdEcl@cluster0.3snlp4j.mongodb.net",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};

module.exports = { main };
