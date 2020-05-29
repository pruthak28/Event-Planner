var connection = require("../models/connection");
var userconnections = require('../models/userConnection');
//function that returns all connections
var getConnections = function(callback){
  return connection.connectionModel.find({},{_id:0})
  .exec(function(err, connections) {
            callback(err, connections);
         });
};

//function that reutrns a single connection based on matching id from existing connection list
var getConnection = function(connectionId, callback){
  return connection.connectionModel.findOne({"connId": connectionId },{_id:0})
  .exec(function(err, connection) {
      callback(err, connection);
   }); // => yields existing secific connection from Db
};

//adds a new connection to the database.
var addConnection = function(Connection){
  return new Promise((resolve, reject) =>{
    connection.connectionModel.findOne({}).sort({_id:-1}).exec()
    .then((record)=>{
      var matches = (record.connId).match(/(\d+)/);
      var connId = parseInt(matches) +1;
      var newConn = new connection.connectionModel({connId:((connId.toString().length==1)?"CON0"+connId.toString():"CON" + connId.toString()), connName:Connection.connName, connTopic:Connection.connTopic, connDetails:Connection.connDetails, connTime:Connection.connTime, Host: Connection.Host, location:Connection.location, userId: Connection.userId});
      newConn.save().then(()=>{
        resolve(true);
      }).catch((err)=>{
        console.log("Error occured while adding new connection to the database.");
        return reject(err);
      });
      resolve(true);
    }).catch((err)=>{
      console.log("No records in the databse");
      return reject(err);
    });
  });

}

//updates a connection in the database
var updateConnection = function(connectID, Connection){
  return new Promise((resolve, reject) =>{
    connection.connectionModel.updateOne({"connId":connectID},Connection).exec()
    .then(()=>{
      resolve(true);
    }).catch((err)=>{
      console.log("Error occured while updating the connection.");
      return reject(err);
    });
  });

}

//function that deletes a specific connection.
var deleteConnection = function(connId){
  return new Promise((resolve, reject) =>{
    userconnections.userConnectionModel.deleteMany({"connection.connId":connId}).then((results)=>{
      console.log(results);
      connection.connectionModel.deleteOne({connId: connId}).then((results)=>{
        console.log(results);
        resolve(true);
      }).catch((err)=>{
        console.log("Error occured while deleting connection record.");
        return reject(err);
      });
      resolve(true);
    })
    .catch((err)=>{
      console.log("Error occured while deleting connection records from user connections.");
      return reject(err);
    })
  });
}

//retrieves the connection by connection name
var getConnectionByName = function(connName, connTopic)
{
  return new Promise((resolve, reject) =>{
    connection.connectionModel.findOne({"connName": connName, "connTopic": connTopic },{_id:0}).exec().then((results)=>{
      resolve(results);
    })
    .catch((err)=>{
      console.log("Error occured while retrieving connection records from database.");
      return reject(err);
    })
  });
}
 module.exports.getConnection = getConnection;
 module.exports.getConnections = getConnections;
 module.exports.addConnection = addConnection;
 module.exports.deleteConnection = deleteConnection;
 module.exports.updateConnection = updateConnection;
 module.exports.getConnectionByName = getConnectionByName;
