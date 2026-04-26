const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: String,
    rollNumber: String,
    year: String,
    degree: String,
    project: String,
    hobbies: String,
    certificate: String,
    internship: String,
    aim: String,
    image: String // Stores the filename
});

module.exports = mongoose.model('Member', memberSchema);