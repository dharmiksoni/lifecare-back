const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LifeCare = new Schema(
    {
        locationId:{type: Number, required: true},
        name: {type: String, required: true},
        // time: {type: [String], required: true},
        // rating: {type: Number, required: true},
        // url: {type: String, required: true},
    },
    {
        versionKey: false
    }
    // {timeStamps: true}
    )

module.exports = mongoose.model('location', LifeCare, 'location');