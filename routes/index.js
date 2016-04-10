var express = require('express');
var router = express.Router();
var user = require('../model/user');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET list page. */
router.get('/userlist', function(req, res) {
  user.find({},function(err,docs){
  	if (err) {
  		console.log(err);
  	}else{
  		console.log(docs);
  		res.render('userlist', { title: 'userList', userlist: docs });
  	}
  });
});  


module.exports = router;
