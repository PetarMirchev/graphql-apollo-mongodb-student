//require("dotenv").config();


const mongoose = require("mongoose");

const DATABASE_URL = "mongodb+srv://pepi1:1234567890a@cluster-cms.5jcqr.mongodb.net/myFirstDatabase1?retryWrites=true&w=majority";  //process.env.DATABASE_URL;

const connectDb = () => {
  return mongoose.connect(DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true }, err => {
    
    if (err) {
      console.log("Connection to DB failed!!!");
    }
    else{
      console.log("DB connection successful. YES!");
    }
  });
};

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error"));

module.exports = connectDb;
