const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');

async function connectToMongo() {
    await mongoose.connect('mongodb://localhost:27017');
    console.log("Connect to Successfull")
  
  }

module.exports = connectToMongo