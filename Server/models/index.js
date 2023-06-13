require('dotenv').config()
const mongoose = require('mongoose')

let connectDB = () => {
    mongoose.connect(
        process.env.CONNECTION_TO_DB, console.log('connected to mongo via mongoose')
    );
};

connectDB()

module.exports = mongoose