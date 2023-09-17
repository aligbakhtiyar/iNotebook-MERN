const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connect to Successfull")
    })
}

module.exports = connectToMongo