'use strict';

const express = require('express');
const router = express.Router();

const logger = require('../middlewares/logger');

let db = [];
// Route to Get All Categories
router.get('/categories',logger, (req, res) => {
  console.log(req.message);
  let count = db.length;
  let results = db;
  res.json({ count, results });
});

// Route to Create a Category
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

