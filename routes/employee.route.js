const express = require('express');
const employeeRoute = express.Router();

let Employees = require('../models/Employee');

employeeRoute.route('/emoloyees').get((req, res, next) => {
    Employees.find((error, data) => {
        if(error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

module.exports = employeeRoute;