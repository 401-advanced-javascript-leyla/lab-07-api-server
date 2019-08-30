'use strict';

const express = require('express');
const router = express.Router();

const logger = require('../middlewares/logger');

let db = [];

// Route to Get All Categories
/**
 * Sign up new user
 * @route Get /categories
 * @returns {object} count, results
 * @returns {Error}  default - Unexpected error
 */
router.get('/categories',logger, (req, res) => {
  console.log(req.message);
  let count = db.length;
  let results = db;
  res.json({ count, results });
});

// Route to Create a Category
/**
 * Sign up new user
 * @route POST /categories
 * @param {string} category name
 * @param {string} description
 * @returns {object} category
 * @returns {Error}  default - Unexpected error
 */
router.post('/categories', logger, (req, res, next) => {
  let record = req.body;
  record.id = Math.random();
  if(req.valid){
    db.push(record);
  }else{
    res.send('500 ERROR');
  }
  res.json(record);
});

module.exports = router;

