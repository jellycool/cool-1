var mongoose = require('mongoose');

// var conn = mongoose.createConnection('mongodb://127.0.0.1:27017/test');
mongoose.connect('mongodb://127.0.0.1/test');
// 链接错误
// conn.on('error', function(error,next) {
//   console.log(error);
// });

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name     : String,
    age      : Number
});
// 关联test数据库user表
// var user = conn.model('User',User,'user');
//这里面的users是数据库的一个集合,指定collection名称为user
var user = mongoose.model('users', UserSchema,'user');

module.exports = user;