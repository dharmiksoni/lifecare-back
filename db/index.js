const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/lifecare', {useNewUrlParser: true})
    .then(res => {
        console.log("DB connected!");
        
    })
    .catch(e => {
        console.error("Mongodb connection error ", e.message);
    })

const db = mongoose.connection;

module.exports = db;