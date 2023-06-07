const mongoose = require('mongoose')

let connectDB = () => {
    mongoose.connect(
        'mongodb://127.0.0.1:27017/solo-project', console.log('connected to mongo via mongoose')
    );
};

connectDB()

module.exports = mongoose