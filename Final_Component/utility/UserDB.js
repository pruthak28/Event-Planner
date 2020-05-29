 var user = require("../models/user");

 //function that returns all users
 var getAllUsers = function(){
   return new Promise((resolve, reject) =>{
     user.userModel.find({},{_id:0}).then((users)=>{
       resolve(users);
     }).catch((err)=>{
       return reject(err);
     });
   });
 };

 //function that reutrns a single user based on matching id from existing user list
 var getUser = function(username){
   return new Promise((resolve, reject) =>{
     user.userModel.findOne({"username": username },{_id:0}).then((user)=>{
       resolve(user);
     }).catch((err)=>{
       return reject(err);
     });
   });
};

//function that adds a user to the database
var addUser = function(User){
  var newUser;
  return new Promise((resolve, reject) =>{
    //retrieve the records in descending order to get latest user id in the database.
    user.userModel.findOne({}).sort({_id:-1}).exec()
    .then((record)=>{
      var userId = parseInt(record.userId) +1;
      newUser = new user.userModel({userId:userId, firstName:User.firstName, lastName:User.lastname, emailId:User.emailId, add1:User.add1, add2:User.add2, city:User.city, state:User.state, zipCode:User.zipCode, country:User.country, username:User.username, password:User.password});
      newUser.save().then(()=>{
        resolve(true);
      }).catch((err)=>{
        console.log("Error occured while adding new user to the database.");
        return reject(err);
      });
      resolve({userId:userId, firstName:User.firstName, lastName:User.lastname, emailId:User.emailId, add1:User.add1, add2:User.add2, city:User.city, state:User.state, zipCode:User.zipCode, country:User.country, username:User.username, password:User.password});
    }).catch((err)=>{
      console.log("No records in the databse");
      return reject({});
    });
  });

}

//check if the email id is taken
var checkEmailId = function(emilId){
  return new Promise((resolve, reject) =>{
    user.userModel.find({"emailId": emilId }).exec()
    .then((result)=>{
      if(result.length>0)
        resolve(true);
      else {
        resolve(false);
      }
    }).catch((err)=>{
      console.log("No records in the databse");
      return reject({});
    });
  });
}

//check if the username is taken
var checkUsername = function(username){
  return new Promise((resolve, reject) =>{
    user.userModel.find({"username": username }).exec()
    .then((result)=>{
      if(result.length>0)
        resolve(true);
      else {
        resolve(false);
      }
    }).catch((err)=>{
      console.log("No records in the databse");
      return reject({});
    });
  });
}

  module.exports.getUser = getUser;
  module.exports.getAllUsers = getAllUsers;
  module.exports.addUser= addUser;
  module.exports.checkEmailId = checkEmailId;
  module.exports.checkUsername = checkUsername;
