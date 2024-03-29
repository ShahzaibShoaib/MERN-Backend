const mongoose = require('mongoose');

const AirportSchema = new mongoose.Schema({
    id: String,
    country: String,
    city: String,
    owner: String
});

const Airports = mongoose.model('Airport', AirportSchema);

module.exports = Airports;
