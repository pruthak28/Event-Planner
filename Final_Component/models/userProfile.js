var userConnDB = require('../utility/UserConnectionDB.js');

//userProfile object model
var userProfile = function(userId, listOfUserConn){
 this.userProfileModel = {userId:userId, listOfUserConn:listOfUserConn};
 this.iterObj = this.userProfileModel.listOfUserConn;
};

//insert connection function
userProfile.prototype.addConnection = function(Connection, rsvp, userID){
  try{
    var addRSVP = userConnDB.addRSVP(Connection, rsvp, userID);
    return new Promise((resolve, reject) =>{
      addRSVP.exec()
      .then(() => {
        resolve(true);
      }).catch((err)=>{
        return reject(err);
      });
    });
  }
  catch(ex)
  {
    console.log("Error occured while saving the connection");
    return false;
  }

};

//delete connection function
userProfile.prototype.removeConnection = function(Connection, userID){
  try{
    // var findUserConnection = userConnDB.findUserConnection(Connection.connId, userID);
    //deletes RSVP of the user connection record by retrieving connection id.
    return new Promise((resolve, reject) =>{
      // findUserConnection.exec().then((userCon)=>{
        var deleteUserConnection = userConnDB.deleteUserConnection(Connection.connId, userID);
        deleteUserConnection.then((result)=>{
          console.log(result);
          resolve(true);
        }).catch((err)=>{
          return reject(err);
        });
      //   resolve(true);
      // }).catch((err)=>{
      //   return reject(err);
      // });
    });
  }
  catch(ex){
    console.log("Error occured while deleting the connection");
    return false;
  }
};



//update connection function
userProfile.prototype.updateConnection = async function(userConnection, userID){
  try{
      var updateRSVP = userConnDB.updateRSVP(userConnection.connection.connId, userConnection.rsvp, userID);
      return new Promise((resolve, reject) =>{
        updateRSVP.exec()
        .then(() => {
          resolve(true);
        }).catch((err)=>{
          return reject(err);
        });
      });
  }
  catch(ex){
    console.log("Error occured while updating the connection");
    return false;
  }
};

//return the list of user connections function
userProfile.prototype.getConnections = function(userID){
  var getUserProfile = userConnDB.getUserProfile(userID);

  return new Promise((resolve, reject) =>{
    getUserProfile.exec()
    .then((userConnections) => {
      resolve(userConnections);
    }).catch((err)=>{
      return reject(err);
    });
  });
};

//function which clears the content of userProfile object
userProfile.prototype.emptyProfile = function(){
  this.userProfileModel = null;
  return true;
};

module.exports.userProfile = userProfile;
