const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery", false); //strictQuery to false means that it does not to follow the schema
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Db Connected");
  } catch (error) {
    console.log(error);
  }
};
  
module.exports = { db };
