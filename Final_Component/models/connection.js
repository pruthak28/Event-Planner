var mongoose = require('mongoose');

//connect to db NBADApp
if(mongoose.connection.readyState == 0){
  mongoose.connect('mongodb://localhost/NBADApp', {useNewUrlParser: true});
  var db = mongoose.connection;

  //print a message when connected to DB else throw connection error.
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function(){
      console.log('connected to DB successfully. location: connection Model');
  });
}


//connection schema declaration
var connection = new mongoose.Schema({connId:String, connName:String, connTopic:String, connDetails:String, connTime:String, Host: String, location: String, userId: String});
//referring to exising connection collection present in the DB
var connectionModel = mongoose.model('connectionModel', connection, "connection");


module.exports.connectionModel = connectionModel;
