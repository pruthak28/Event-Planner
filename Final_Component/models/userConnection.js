var mongoose = require('mongoose');

//connect to db NBADApp
if(mongoose.connection.readyState == 0){
  mongoose.connect('mongodb://localhost/NBADApp', {useNewUrlParser: true});
  var db = mongoose.connection;

  //print a message when connected to DB else throw connection error.
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function(){
      console.log('connected to DB successfully. location: UserConnection Util');
  });
}

//userConnections object model
//userConnections schema declaration
var userConnection = new mongoose.Schema({userId:String, connection: Object, rsvp: String});
//referring to exising user collection present in the DB
var userConnectionModel = mongoose.model('userConnectionModel', userConnection, "userConnection");

module.exports.userConnectionModel = userConnectionModel;
