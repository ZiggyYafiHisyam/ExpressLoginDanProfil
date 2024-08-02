var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET users listing. */
router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'profile' });
  });



module.exports = router;
