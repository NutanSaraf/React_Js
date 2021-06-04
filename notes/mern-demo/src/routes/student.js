var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Student = require('../models/student.js');


router.get('/',function(req, res, next){  
    res.send("Welcome to MERN demo.");
});

/* GET ALL Students */
router.get('/students', function(req, res, next) {
    Student.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
    });
  });

module.exports = router;