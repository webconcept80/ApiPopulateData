
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = new Schema({
    first_name: {
        type: String, required: true
    },
    last_name: {
        type: String, required: true
    },
    email: {
        type: String, required: true
    },
    Address: {
        type: Schema.Types.ObjectId, required: true, ref: 'Address'
    },
    Employee: {
        type: Schema.Types.ObjectId, required: true, ref: 'Employee'
    },
});

module.exports = mongoose.model("User", User);