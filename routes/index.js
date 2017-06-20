var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Silicon Beach Guitar Lessons' });
});

router.get('/rates', function(req, res, next) {
  res.render('rates', { title: 'Silicon Beach Guitar Lessons' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Silicon Beach Guitar Lessons' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Silicon Beach Guitar Lessons' });
});

module.exports = router;
