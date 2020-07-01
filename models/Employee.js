
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Employee = new Schema({
    companyName: {
        type: String, required: true
    },
    jobTitle: {
        type: String, required: true
    },
    joinDate: {
        type: String, required: true
    },   
});

module.exports = mongoose.model("Employee", Employee);