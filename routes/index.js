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

/* POST adduser page. */
router.post('/addsearchuser', function(req, res) {
	
  // /*以下为测试用 */
  // var name = req.body.name;
  // var age = req.body.age;
  // console.log(name);
  // console.log(age);
  // res.send(req.body);
  // console.log(req.body.adduser);
  // var mybody = req.body;
  // //获得hash表键值对数量
  // var mycount = Object.keys(mybody).length;
  // console.log(mycount);
  // for (var key in mybody) {
  //   console.log(key);
  //   console.log(Object.keys(mybody)[key]);
  //   console.log(mybody[key]);
  // };
  // //输出hash表每一个键值对的键名
  // for(i =0 ; i < mycount ; i++){
  //   console.log(Object.keys(mybody)[i])
  // };
  var mybody = req.body;
  var name = mybody.name;
  var age = mybody.age;
  if (Object.keys(mybody)[2] == 'adduser'){
     if ( !name || name == "" || name == undefined ) {
       console.log("无效输入");
       res.redirect('/userlist');
     }else {
       user.create({'name': name ,'age': age},function(err,docs){
       if (err) {
         console.log(err);
       }else{
         console.log('adduser success: ' + docs);
         res.redirect('/userlist');
       }
       });
     }
  }else{
    if(Object.keys(mybody)[2] == 'searchuser'){
     if (!name || name == "" || name == undefined ){
          if(!age || age == null || age == undefined ){
                console.log('you\'ve input anything, find all  users.');
                res.redirect('/userlist');
          }else{
                user.find({'age': age },function(err,docs){
                   console.log(docs);
                   res.render('userlist', { title: 'searchuserList', userlist: docs });
                });
          }

     }else{
          if(!age || age == null || age == undefined ){
                // name LIKE name 除非采用硬编码，否则要使用正则表达式
                var query = RegExp(name);
                console.log(query);

                user.find({'name': query },function(err,docs){
                   console.log(docs);
                   res.render('userlist', { title: 'searchuserList', userlist: docs });
                });
          }else{
                user.find({'name': name,'age': age },function(err,docs){
                   console.log(docs);
                   res.render('userlist', { title: 'searchuserList', userlist: docs });
                });
          };

     };
   };
     
  };
    
});  

/* GET deluser page. */
router.get('/deluser/:id', function(req, res) {
	var objectid = req.params.id;
	
  user.findByIdAndRemove(objectid,function(err,docs){
  	if (err) {
  		console.log(err);
  	}else{
  		console.log('deluser success: ' + docs);
  		res.redirect('/userlist');
  	}
  });
});  

/* GET updateuser page. */
router.get('/updateuser/:id', function(req, res) {
  var objectid = req.params.id;
  if (objectid) {
  	  user.findById(objectid,function(err,docs){
  	     if (err) {
  		     console.log(err);
  	    }else{
  	         console.log('finduser success: ' + docs);
  		     res.render('updateuser', { oneuser: docs });
  	    }
      });
  } 	
});  

/* POST updateuser page. */
router.post('/updateuser', function(req, res) {
  var oneuser = req.body.oneuser;
  console.log(oneuser);
  if (!oneuser) {
      return;
  }	
  user.findByIdAndUpdate(oneuser._id,{
        name: oneuser.name,age:oneuser.age
  }, function(err,docs){
  	     if (err) {
  		     console.log(err);
  	    }else{
  	         console.log('update_one_user success: ' + docs);
  		     res.redirect('/userlist');
  	    }
      });	
});  

module.exports = router;
