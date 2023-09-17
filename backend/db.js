const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017"


// this is old version this version can not take callback function
// const connectToMongo = () => {
//     mongoose.connect(mongoURI, ()=>{
//         console.log("Connected to Mongo Successfully");
//     })
// }

const connectToMongo = async () => {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  };
  
  connectToMongo();

module.exports = connectToMongo;

