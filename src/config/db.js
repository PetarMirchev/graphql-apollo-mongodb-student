//require("dotenv").config();


const mongoose = require("mongoose");

const DATABASE_URL =  mongodb+srv://<username>:<password>@cluster-cms.5jcqr.mongodb.net/<Database>?retryWrites=true&w=majority  //process.env.DATABASE_URL;

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
