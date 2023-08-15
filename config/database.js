const mongoose = require("mongoose");

const Mongo_URI = "mongodb://localhost:27017/userproductdb";

exports.connect = () => {
  const options = {};

  // Write the code to establish the database connectivity
  mongoose.connect(Mongo_URI, options, () => {
    console.log("Connected to Mongoose");
  });
};
