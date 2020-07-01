
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Address = new Schema({
    street: {
        type: String, required: true
    },
    city: {
        type: String, required: true
    },
    postalCode: {
        type: String, required: false
    },  
});

module.exports = mongoose.model("Address", Address);