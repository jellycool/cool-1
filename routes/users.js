var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/example1', function(req, res) {
  res.render('example1');
});

module.exports = router;
