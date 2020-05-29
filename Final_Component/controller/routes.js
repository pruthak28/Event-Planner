var alert= require('alert-node');
var express = require('express');
var con = require("../utility/connectionDB.js");
var bodyParser = require("body-parser");
const { check, validationResult } = require('express-validator');
const { buildSanitizeFunction } = require('express-validator');
const sanitizeInputs = buildSanitizeFunction('body');
var router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var ConnDB = require('../utility/connectionDB.js');
var commonFunc = require("../assets/scripts/commonFunc.js");

router.use(urlencodedParser,async function(req, resp, next){
  if(Object.keys(req.query).length > 0){
    //if user is already in the session
    if(req.session.theUser && req.session.isAuthenticated){
      if(req.query.action === "deleteConnection")
      {
        if(await ConnDB.deleteConnection(req.query.connectionId)){
          resp.redirect("/connections");
          return;
        }
      }
    }
  }
  next();
});

router.get("/connection", function(req,resp){
    //validation for the connection Id
    if(Object.keys(req.query).length > 0){
      //checks if the mode is update for connection page
        //validations for connection Id
        if(commonFunc.isValidConnectionID(req.query.connectionId)){
            //renders connection page with connection object model as input
            con.getConnection(req.query.connectionId, function(err, connection){
            if(err){
            //if error then print a message and redirect to connections page
            console.log("Error occured while getting specific connection.");
            resp.redirect("/connections");
          }
          else{
            resp.render("connection", {connection: connection, action: "", SessionExists: (req.session.theUser?"Yes":"No"), user:(req.session.theUser?req.session.theUser.firstName:""), showConnUpdate:(req.session.theUser.userId == connection.userId)});
          }
        });
      }
      else{
        resp.redirect("/connections");
      }
    }
});

router.post("/connection", urlencodedParser,[
  sanitizeInputs("*").trim().blacklist()
], function(req, resp){
  if(Object.keys(req.query).length > 0){
    //checks if the mode is update for connection page
    if(req.query.action === "updateRSVP")
    {
      //validations for connection Id
      if(commonFunc.isValidConnectionID(req.query.connectionId)){
        //renders connection page with connection object model as input
        con.getConnection(req.query.connectionId, function(err, connection){
          if(err){
          //if error then print a message and redirect to connections page
          console.log("Error occured while getting specific connection.");
          resp.redirect("/connections");
          }
          else{
            resp.render("connection", {connection: connection, action: "updateRSVP", SessionExists: (req.session.theUser?"Yes":"No"), user:(req.session.theUser?req.session.theUser.firstName:""), showConnUpdate:(req.session.theUser.userId == connection.userId)});
          }
        });
      }
      else{
        resp.redirect("/connections");
      }
    }
  }
});

//renders connections page
router.get("/connections", function(req,res){
  //session created check
  if(req.session.theUser && req.session.currentProfile)
      displayConnections(req,res)
  else {
    res.redirect("/");
    alert("Session has not been created. Please click on 'Start a New Connection/Login' to create a session. ");

  }
});

//handles newConnection post and displays updated connection list on connections page
router.post("/connections", urlencodedParser, [
  check('topic').not().isEmpty().withMessage("Topic is Required."),
  check('name').not().isEmpty().withMessage("Name is Required."),
  check('name').isAlphanumeric().isLength({min:4}).withMessage("Please enter valid name."),
  // check('name').isLength({min:4}).withMessage("Please enter a valid Connection Name. Name should be at least 4 letters long."),
  check('Description').not().isEmpty().withMessage("Description is Required."),
  check('Description').isLength({min:10}).withMessage("Please enter a Connection Description. Description should be at least 10 letters long."),
  check('location').not().isEmpty().withMessage("Location is Required."),
  check('location').isLength({min:4}).withMessage("Please enter a valid location. Location should be at least 4 letters long."),
  check('date').not().isEmpty().withMessage("Date is Required."),
  check('date').custom((value)=>{
    if(new Date(value) < new Date())
      throw new Error("Please enter a valid date.Date cannot be today's date or a date in the past.");
    else if (!(null != value) && ("undefined" !== typeof value.getDate))
      throw new Error("Please enter a valid date.")
    return true;
  }),
  check('from').not().isEmpty().withMessage("From time is Required."),
  check('from').custom((value)=>{
    if((value).indexOf(":")>-1)
    {
      if((value).indexOf(":")==0) throw new Error("Please enter valid From time.");
      else{
        var strSplit = value.split(":");
        if((typeof strSplit[0] === "string" && isNaN(strSplit[0])) || strSplit[0]=="")
          throw new Error("Please enter valid From time.");
        else if((typeof strSplit[1] === "string" && isNaN(strSplit[1])) || strSplit[1]=="")
          throw new Error("Please enter valid From time.");
        else if(strSplit[1]>=60)
            throw new Error("Please enter valid To time.");
        else if(strSplit[0]>12)
            throw new Error("Please enter valid To time in 12 hour time format.");
      }
    }
    else if(typeof value === "string" && value.length === 1 && (value >= "a" && value <= "z" || value >= "A" && value <= "Z")){
      throw new Error("Please enter valid From time.");
    }

    return true;
  }),
  check('fromSuffix').not().isEmpty().withMessage("From peroid is Required."),
  check('to').not().isEmpty().withMessage("To time is Required."),
  check('to').custom((value)=>{
    if((value).indexOf(":")>-1)
    {
      if((value).indexOf(":")==0) throw new Error("Please enter valid To time.");
      else{
        var strSplit = value.split(":");
        if((typeof strSplit[0] === "string" && isNaN(strSplit[0])) || strSplit[0] =="")
          throw new Error("Please enter valid To time.");
        else if((typeof strSplit[1] === "string" && isNaN(strSplit[1])) || strSplit[1] =="")
          throw new Error("Please enter valid To time.");
        else if(strSplit[1]>=60)
          throw new Error("Please enter valid To time.");
        else if(strSplit[0]>12)
          throw new Error("Please enter valid To time in 12 hour time format.");
      }
    }
    else if(typeof value === "string" && value.length === 1 && (value >= "a" && value <= "z" || value >= "A" && value <= "Z")){
      throw new Error("Please enter valid To time.");
    }

    return true;
  }),
  check('to').custom((value, { req })=>{
    var dtStart = new Date(req.body.date + " " + req.body.from + " " + req.body.fromSuffix);
    var dtEnd = new Date(req.body.date + " " + req.body.to + " " + req.body.toSuffix);
    var difference_in_milliseconds = dtEnd - dtStart;
    if (difference_in_milliseconds < 0)
    {
      throw new Error("To time is before from time. Please enter valid time slot values.");
    }
    else if(difference_in_milliseconds == 0){
      throw new Error("From time and to time cannot be equal. Please enter valid time slot values.");
    }
    return true;
  }),
  check('toSuffix').not().isEmpty().withMessage("To period is Required."),
  sanitizeInputs("*").trim().blacklist()
],async function(req, resp){
  const errors = validationResult(req);
  if (!errors.isEmpty()) {

    var connectionStr;
    if (req.query.action === "updateNewConnection"){
      connectionStr = getconnectionObject(req, getConnectionTime(req));
    }
    else {
      connectionStr = {};
    }
    resp.render("newConnection", {SessionExists: (req.session.theUser?"Yes":"No"), user:(req.session.theUser?req.session.theUser.firstName:""), errors: errors.mapped(), connectionInfo:connectionStr});
    return;
  }
  else{
    var connectionStr = connectionStr = getconnectionObject(req, getConnectionTime(req));
    var index = -1;
    if(Object.keys(req.query).length>0){
      var checkDuplicate = await ConnDB.getConnectionByName(req.body.name, req.body.topic);
      console.log(checkDuplicate);
      console.log(req.query.action);
      if(checkDuplicate != undefined){
        if(req.query.action === "addNewConn"){
          resp.render("newConnection", {SessionExists: (req.session.theUser?"Yes":"No"), user:(req.session.theUser?req.session.theUser.firstName:""), errors: {name:{msg:"The connection name under same connection topic already exists. Enter different name."}}, connectionInfo:{}});
          return;
        }
      }
      if (req.query.action === "updateNewConnection") {
        if(await ConnDB.updateConnection(req.body.connectID, connectionStr))
        {
          resp.redirect("/connections");
        }
        else {
          console.log("Error occured while updating a connection from the databse..");
          connectionStr["connId"] = req.body.connectID;
          resp.redirect("/newConnection?action=updateConnection&connection=" + JSON.stringify(connectionStr));
        }
      }
      else if(req.query.action === "addNewConn"){
        if(await ConnDB.addConnection(connectionStr))
        {
          resp.redirect("/connections");
        }
        else {
          console.log("Error occured while adding new connection to the databse..");
          resp.redirect("/newConnection?action=addNewConn");
        }
      }
    }


  }
});

//extracts distinct connection categories and renders connections page
function displayConnections(req,res){
    //calls getConnections function to display all available connection on connections page
    con.getConnections(function(err, connections){
      if(err){
        //if error then print a message and pass empty arrays to connections page
        console.log("Error occured while getting all connections.");
        res.render("connections", {connections: [], categories: [], SessionExists: (req.session.theUser?"Yes":"No"), user:(req.session.theUser?req.session.theUser.firstName:"")});
      }
      else {
        //if results are retrieved then pass arrays to connections page
        //segregate distinct event categories
        var uniqueCat = [];
        if(connections !== undefined){
          for(i = 0; i< connections.length; i++){
              if(uniqueCat.indexOf(connections[i].connTopic) === -1){
                  uniqueCat.push(connections[i].connTopic);
              }
          }
        }
        res.render("connections", {connections: connections, categories: uniqueCat, SessionExists: (req.session.theUser?"Yes":"No"), user:(req.session.theUser?req.session.theUser.firstName:"")});
      }
    });
}

function getConnectionTime(req){
  dt = req.body.date;
  var day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var splitDate= dt.split("-");
  var dt = new Date(req.body.date);
  return day[dt.getUTCDay()] + ", " + months[dt.getUTCMonth()] + " " + dt.getUTCDate() + ", " + dt.getUTCFullYear() + "|" + ((req.body.from).indexOf(":")>-1?req.body.from:req.body.from + ":00") + req.body.fromSuffix + " - " + ((req.body.to).indexOf(":")>-1?req.body.to:req.body.to + ":00") + req.body.toSuffix;
}

function getconnectionObject(req, connTime){
  return {connName:req.body.name,
                      connTopic:req.body.topic,
                      connDetails:req.body.Description,
                      connTime:connTime,
                      Host: (req.session.theUser?(req.session.theUser.firstName+ " " + req.session.theUser.lastName):""),
                      location: req.body.location,
                      userId: (req.session.theUser?req.session.theUser.userId:"")};
}



module.exports = router;
