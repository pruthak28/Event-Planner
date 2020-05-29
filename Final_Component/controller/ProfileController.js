var express = require('express');
var bodyParser = require("body-parser");
const { check, validationResult } = require('express-validator');
const { buildSanitizeFunction } = require('express-validator');
const sanitizeInputs = buildSanitizeFunction('body');
var userModel = require("../models/user.js");
var usersDB = require("../utility/UserDB.js");
var userProfileModel = require("../models/userProfile.js");
var userConnectionModel = require("../models/userConnection.js");
var commonFunc = require("../assets/scripts/commonFunc.js");
var crypto = require('crypto');

var router = express.Router();

//initialized body parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//controller for all routes
router.use(urlencodedParser,async function(req, resp, next){
  if(Object.keys(req.query).length > 0){
      //if the user session variable is not initialised and if the request id coming from new connection button or login button.
      if(!req.session.theUser && ((req.query.action === "newConn") || req.query.action === "signin")){


      } //if user is already in the session
      else if(req.session.theUser && req.session.isAuthenticated){
        console.log("The user is already logged in.");
        //if add new connection button clicked
        if(req.query.action === "newConnection")
        {
          resp.redirect("/newConnection?action=addNewConn");
          return;
        }
        // if signin button clicked or the action parameter in querystring is not passed
        else if(req.query.action === "signin" || req.query.action === undefined)
        {
          resp.redirect("/savedConnections");
          return;
        }
        // add a new connection case
        else if(req.query.action === "save"){
          // checked if the userProfile oject is already in the session
          if(req.session.currentProfile)
          {

            //checked if the request is coming from a valid source and has valid connection id
            if(req.body.viewConnections != (JSON.parse(req.query.connection)).connId)
            {
              console.log("Request to add invalid connection.");
              resp.redirect("/savedConnections");
            }
            else{
              //rsvp value validity check
              if(req.query.rsvp === "Yes" || req.query.rsvp === "No" || req.query.rsvp === "Maybe"){
                //addconnection function in userProfile model is called

                var userProfile = new userProfileModel.userProfile(req.session.currentProfile.userProfileModel.userId, req.session.currentProfile.userProfileModel.listOfUserConn);
                if(await userProfile.addConnection(JSON.parse(req.query.connection),req.query.rsvp,req.session.theUser.userId))
                {
                    //if the insertion is successful then updated the contents of userProfile session object
                    console.log("Connection saved successfully;");
                    req.session.currentProfile.userProfileModel.listOfUserConn = await userProfile.getConnections(req.session.theUser.userId);
                    resp.redirect("/savedConnections");
                }
              }
              else {
                {
                  console.log("Invalid value of rsvp");
                  resp.redirect("/savedConnections");
                }
              }
            }
          }
        }
        // when delete button is clicked
        else if(req.query.action === "delete")
        {
          if(req.session.currentProfile)
          {
            // checked in the requested id exists in the connections displayed on the page
            //conn id validation check
            if(commonFunc.isValidConnectionID((JSON.parse(req.query.connection)).connId.toString())){
              if(req.body.viewConnections.indexOf((JSON.parse(req.query.connection)).connId) > -1){
                //called removeConnection function and updated the contents of session variable
                  var userProfile = new userProfileModel.userProfile(req.session.currentProfile.userProfileModel.userId, req.session.currentProfile.userProfileModel.listOfUserConn);
                  if(await userProfile.removeConnection(JSON.parse(req.query.connection), req.session.theUser.userId)){
                    console.log("Connection "+ req.query.connection + " deleted successfully.");
                    var listofConn = await userProfile.getConnections(req.session.theUser.userId);
                    if(listofConn !== undefined){
                      req.session.currentProfile.userProfileModel.listOfUserConn = listofConn;
                      resp.redirect("/savedConnections");
                    }
                  }
              }
              else {
                //if the id is different from that of the connection ids displayed on the page
                console.log("Request to delete invalid connection.");
                resp.redirect("/savedConnections");
              }
            }
            else {
              console.log("Invalid connection id");
              resp.redirect("/savedConnections");
            }
          }
        }
        //when update button is clicked
        else if(req.query.action === "updateRSVP")
        {
          //conn id validation check
          if(commonFunc.isValidConnectionID((JSON.parse(req.query.connection)).connId.toString())){
            if(req.body.viewConnections.indexOf((JSON.parse(req.query.connection)).connId) = -1){
              console.log("Request to update invalid connection.");
              resp.redirect("/savedConnections");
            }
          }
          else {
            console.log("Invalid connection id");
            resp.redirect("/savedConnections");
          }

        }
        //when the updated rsvp value is passed from connection page
        else if(req.query.action === "updateProfile")
        {
          if(req.session.currentProfile)
          {
            //rsvp value validity check
            if(req.query.rsvp === "Yes" || req.query.rsvp === "No" || req.query.rsvp === "Maybe"){
              //called updateConnection function and updated the session variable value
              var userProfile = new userProfileModel.userProfile(req.session.currentProfile.userProfileModel.userId, req.session.currentProfile.userProfileModel.listOfUserConn);
                if(await userProfile.updateConnection({"connection": JSON.parse(req.query.connection),"rsvp": req.query.rsvp}, req.session.theUser.userId))
                {
                    console.log("Connection updated successfully;");
                    req.session.currentProfile.userProfileModel.listOfUserConn = await userProfile.getConnections(req.session.theUser.userId);
                    resp.redirect("/savedConnections");
                }
            }
            else{
              console.log("Invalid value of rsvp");
              resp.redirect("/savedConnections");
            }

          }
        }
        // signs out the user
        else if(req.query.action === "signout" )
        {
          //clears the content of user session variable
          if(req.session.theUser)
              req.session.theUser = null;
        //clears the content of userProfile session variable
          if(req.session.currentProfile){
            var userProfile = new userProfileModel.userProfile(req.session.currentProfile.userProfileModel.userId, req.session.currentProfile.userProfileModel.listOfUserConn);
            if(userProfile.emptyProfile())
              //destroys the session
              req.session.destroy();

          }
          resp.redirect("/");
        }

      }

  }
  next();

});

//when login button is clicked i.e. post request for authentication
router.post("/login", urlencodedParser, [
  check('username').not().isEmpty().withMessage("Username is Required."),
  check('password').not().isEmpty().withMessage("Password is Required."),
  check('username').isLength({min:4}).withMessage("Please enter a valid username."),
  check('password').isLength({min:4}).withMessage("Please enter a valid password."),
  sanitizeInputs("*").trim().blacklist()
], async function(req, resp){
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    resp.render("login", {action: req.query.action, error: "", errors: errors.mapped()});
    return;
  }
  else{
    req.session.theUser = null;
    var SessionUser = await usersDB.getUser(req.body.username);
    if(SessionUser !== undefined && SessionUser != null){
      req.session.theUser = SessionUser;
      if(verifyPassword(req.session.theUser.password.toString(), req.body.password, req.session.theUser.username.toString(), false)){
        //declared and initialised userProfile session variable
        var userProfile = new userProfileModel.userProfile(req.session.theUser.userId,[]);
        userProfile.userProfileModel.listOfUserConn = await userProfile.getConnections(req.session.theUser.userId);
        req.session.currentProfile = userProfile;
        console.log("Login successful!");
        req.session.isAuthenticated = true;
        if(req.query.action === "newConn") resp.redirect("/newConnection?action=addNewConn");
        else resp.redirect("/savedConnections");
      }
      else {
        resp.render("login", {action: req.query.action, error: "Please enter a correct password.", errors: []});
      }
    }
    else {
      console.log("Error occured while authenticating the user. User does not exist.");
      resp.render("login", {action: req.query.action, error: "Please enter a valid username.", errors: []});
    }
  }
});

router.post("/signin", urlencodedParser,[
  sanitizeInputs("*").trim().blacklist()
],function(req, resp){
  resp.render("login", {action: req.query.action, error:"", errors: []});
});

router.post("/signUp",urlencodedParser,[
  check("firstname").not().isEmpty().withMessage("Firstname is Required."),
  check("firstname").not().isNumeric().withMessage("Please enter a valid Firstname."),
  check("lastname").not().isEmpty().withMessage("Lastname is Required."),
  check("lastname").not().isNumeric().withMessage("Please enter a valid Lastname."),
  check("email").not().isEmpty().withMessage("Email is Required."),
  check("email").isEmail().withMessage("Please enter a valid Email Id."),
  check("add1").not().isEmpty().withMessage("Address 1 is Required."),
  check("add1").isLength({min:10}).withMessage("Please enter a valid Address."),
  check("city").not().isEmpty().withMessage("City is Required."),
  check("city").not().isNumeric().withMessage("Please enter a valid city."),
  check("state").not().isEmpty().withMessage("State is Required."),
  check("state").not().isNumeric().withMessage("Please enter a valid city."),
  check("country").not().isEmpty().withMessage("Country is Required."),
  check("country").not().isNumeric().withMessage("Please enter a valid Country."),
  check("zipCode").not().isEmpty().withMessage("Zip Code is Required."),
  check("zipCode").not().isAlpha().withMessage("Please enter a valid Zip Code."),
  check("zipCode").isLength({min:5}).withMessage("Please enter a valid Zip Code."),
  check("username").not().isEmpty().withMessage("Username is required."),
  check("username").isLength({min:4}).withMessage("Please enter a valid username. Username should contain at least 4 letters."),
  check("password").not().isEmpty().withMessage("Password is Required."),
  check("password").isLength({min:4}).withMessage("Please enter a valid Password. Password should contain at least 4 letters."),
  check("confPassword").not().isEmpty().withMessage("Confirm Password is Required."),
  check("confPassword").isLength({min:4}).withMessage("Please enter a valid Confirm Password. Confirm Password should contain at least 4 letters."),
  check("confPassword").custom((value,{ req })=>{
    if(value != req.body.password){
      throw new Error("Confirm Password does not match with the Password.");
    }
    return true;
  }),
  sanitizeInputs("*").trim().blacklist()
], async function(req, resp){
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    resp.render("signUp", {authError: "", errors: errors.mapped()});
    return;
  }
  else{
    if(await usersDB.checkEmailId(req.body.email)){
      resp.render("signUp", {authError: "Looks like the Email Id is already registered. Please login to continue.", errors: []});
      return;
    }

    if(await usersDB.checkUsername(req.body.username)){
      resp.render("signUp", {authError: "Username is taken. Please enter different username to continue.", errors: []});
      return;
    }
    var pwdHash = verifyPassword("", req.body.password, req.body.username ,true);
    req.session.theUser = null;
    var SessionUser = await usersDB.addUser({firstName:req.body.firstname, lastName:req.body.lastname, emailId:req.body.email, add1:req.body.add1, add2:req.body.add2, city:req.body.city, state:req.body.state, zipCode:req.body.zipCode, country:req.body.country, username:req.body.username, password:pwdHash});
    if(SessionUser != undefined && SessionUser != null){
      req.session.theUser = SessionUser;
      //declared and initialised userProfile session variable
      var userProfile = new userProfileModel.userProfile(req.session.theUser.userId,[]);
      req.session.currentProfile = userProfile;
      console.log("Sign Up successful!");
      req.session.isAuthenticated = true;
      resp.redirect("/savedConnections");
    }
    else {
      resp.render("signUp", {authError:"Error occured while signing up the user.", errors:[]})
    }
  }
});

router.get("/signUpNewUser", function(req,resp){
  //session created check
  if(req.session.theUser && req.session.currentProfile)
  //checked if session for userProfile and user is defined. If yes then passed values to the savedConnections ejs using session variables
    resp.redirect("/savedConnections");
  else {
    resp.render("signUp", {authError:"", errors:[]});
  }
});

function verifyPassword(savedPassword, password, salt, dynamicReturn){
  // Hashing user's salt and password with 1000 iterations, 64 length and sha512 digest
  this.hash = crypto.pbkdf2Sync(password, salt,
  1000, 64, `sha512`).toString(`hex`);
  if(dynamicReturn)
    return this.hash;
  else
    return savedPassword === this.hash;
}



module.exports = router;
