<<<<<<< HEAD
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoose opened!');
//   var userSchema = new mongoose.Schema({
//       name:{type: String, unique: true}, 
//       password:String
//     }, 
//     {collection: "accounts"}
//     );
//   var User = mongoose.model('accounts', userSchema);

//   User.findOne({name:"WangEr"}, function(err, doc){
//     if(err) console.log(err);
//     else console.log(doc.name + ", password - " + doc.password);
//   });

//   var lisi = new User({name:"LiSi", password:"123456"});
//   lisi.save(function(err, doc){
//     if(err)console.log(err);
//     else console.log(doc.name + ' saved');
//   });  
=======
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoose opened!');
//   var userSchema = new mongoose.Schema({
//       name:{type: String, unique: true}, 
//       password:String
//     }, 
//     {collection: "accounts"}
//     );
//   var User = mongoose.model('accounts', userSchema);

//   User.findOne({name:"WangEr"}, function(err, doc){
//     if(err) console.log(err);
//     else console.log(doc.name + ", password - " + doc.password);
//   });

//   var lisi = new User({name:"LiSi", password:"123456"});
//   lisi.save(function(err, doc){
//     if(err)console.log(err);
//     else console.log(doc.name + ' saved');
//   });  
>>>>>>> 4042b6abdafe9acfbff2e2e44907b313214ee7e1
});