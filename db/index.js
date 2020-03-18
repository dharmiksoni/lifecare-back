const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://anantl:lifecare123@cluster0-qxcvn.mongodb.net/lifecare?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(res => {
        console.log("DB connected!");
    })
    .catch(e => {
        console.error("Mongodb connection error ", e.message);
    })

const db = mongoose.connection;

module.exports = db;