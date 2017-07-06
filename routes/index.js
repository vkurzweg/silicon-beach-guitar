var express = require('express');
var router = express.Router();
const sendmail = require('sendmail')({
  logger: {
    debug: console.log,
    info: console.info,
    warn: console.warn,
    error: console.error
  }
})

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

router.post('/contactus', function(req, res, next) {
  console.log(req.body)
  sendmail({
      from: req.body.contactEmail,
      to: 'victoriakdunham@gmail.com',
      subject: 'Silicon Beach Guitar Lessons',
      html: '<p>name: ' + req.body.contactName +'</p>' + '<p>email: ' + req.body.contactEmail + '</p>' + '<p>number: ' + req.body.contactPhone +'</p>' + '<p>message: ' + req.body.contactMessage + '</p>'
    }, function(err, reply) {
      console.log(err && err.stack);
      // if (reply.indexOf('221') >= 0){
      //   res.status(200).send('Message sent');
      // }
      console.dir(reply);
  });
});

module.exports = router;
