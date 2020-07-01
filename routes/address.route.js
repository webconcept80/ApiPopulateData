const express = require('express');
const addressRoute = express.Router();

let Addresses = require('../models/Address');

addressRoute.route('/addresses').get((req, res, next) => {
    Addresses.find((error, data) => {
        if(error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

module.exports = addressRoute;