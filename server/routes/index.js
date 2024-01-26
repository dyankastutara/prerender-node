'use strict';

require('dotenv').config();
const router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send("Homepage");
});

module.exports = {
   provinces: require('./provinces')
}