var userconnections = require('../models/userConnection');
const { MongoClient, ObjectID } = require('mongodb');
//function that returns all usersConnections
var getUserProfile = function(userID){
  return userconnections.userConnectionModel.find({userId: userID},{_id:0});
};

//function that saves userConnections in the DB
var addRSVP = function(Connection, rsvp, userID){
  return userconnections.userConnectionModel.updateOne({"userId": userID, "connection.connId": Connection.connId},
       {"userId":userID,"connection":Connection, "rsvp":rsvp}, {upsert: true});
};

//function that updates userConnections in the DB
var updateRSVP = function(ConnectionID, rsvp, userID){
  return userconnections.userConnectionModel.updateOne({"userId": userID, "connection.connId": ConnectionID},
       {"rsvp":rsvp});
};

//function that removes a usersConnection from the db
var deleteRSVP = async function(ID){
   return await userconnections.userConnectionModel.deleteOne({_id: ObjectID(ID)});
};

//finds a connection by user id and connection id
var findUserConnection =  function(ConnectionID, userID){
 return userconnections.userConnectionModel.findOne({userId: userID, "connection.connId": ConnectionID});
};

//finds a connection by user id and connection id
var deleteUserConnection =  function(ConnectionID, userID){
 return userconnections.userConnectionModel.deleteOne({userId: userID, "connection.connId": ConnectionID});
};

module.exports.getUserProfile = getUserProfile;
module.exports.addRSVP = addRSVP;
module.exports.updateRSVP = updateRSVP;
module.exports.deleteRSVP = deleteRSVP;
module.exports.findUserConnection = findUserConnection;
module.exports.deleteUserConnection = deleteUserConnection;
