var mongoose = require('mongoose');

//connect to db NBADApp
if(mongoose.connection.readyState == 0){
  mongoose.connect('mongodb://localhost/NBADApp', {useNewUrlParser: true});
  var db = mongoose.connection;

  //print a message when connected to DB else throw connection error.
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function(){
      console.log('connected to DB successfully. location: user Model');
  });
}

//user object model
//user schema declaration
var user = new mongoose.Schema({userId:String, firstName:String, lastName:String, emailId:String, add1:String, add2:String, city:String, state:String, zipCode:String, country:String, username:String, password:String});
//referring to exising user collection present in the DB
var userModel = mongoose.model('userModel', user, "user");

module.exports.userModel = userModel;
