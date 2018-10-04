var express = require('express');
var router = express.Router();
var User = require('../models/User')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.put('/user', (req, res, next) => {
  User.findOrCreate


});
module.exports = router;
