var alert= require('alert-node');
var express = require('express');
var bodyParser = require("body-parser");
const { buildSanitizeFunction } = require('express-validator');
const sanitizeInputs = buildSanitizeFunction('body');
var router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//router when no url is specified
router.get("/", function(req,res){
    res.render("index", {SessionExists: (req.session.theUser?"Yes":"No"), user:(req.session.theUser?req.session.theUser.firstName:"")});
});

//router for index url
router.get("/index", function(req,res){
    res.render("index", {SessionExists: (req.session.theUser?"Yes":"No"), user:(req.session.theUser?req.session.theUser.firstName:"")});
});

//router for contact url
router.get("/contact", function(req,res){
    res.render("contact", {SessionExists: (req.session.theUser?"Yes":"No"), user:(req.session.theUser?req.session.theUser.firstName:""), "msg":""});
});

//router for about url
router.get("/about", function(req,res){
    res.render("about", {SessionExists: (req.session.theUser?"Yes":"No"), user:(req.session.theUser?req.session.theUser.firstName:"")});
});

//router for savedconnectio url
router.get("/savedConnections", function(req,res){
  //checked if session for userProfile and user is defined. If yes then passed values to the savedConnections ejs using session variables
  res.render("savedConnections", {"userConn" : ((req.session.currentProfile)?req.session.currentProfile.userProfileModel.listOfUserConn:[]), user:(req.session.theUser?req.session.theUser.firstName:""), SessionExists: (req.session.theUser?"Yes":"No")});

});

//router for newConnection url
router.get("/newConnection", function(req,res){
    res.render("newConnection", {SessionExists: (req.session.theUser?"Yes":"No"), user:(req.session.theUser?req.session.theUser.firstName:""), errors: [], connectionInfo:{}});
});

router.post("/newConnection", urlencodedParser, [sanitizeInputs("*").trim().blacklist()], function(req, resp){
  if(Object.keys(req.query).length > 0){
    console.log(req.query.action);
    //if user is already in the session
    if(req.session.theUser && req.session.isAuthenticated){
      if(req.query.action === "updateConnection")
      {
        resp.render("newConnection", {SessionExists: (req.session.theUser?"Yes":"No"), user:(req.session.theUser?req.session.theUser.firstName:""), errors: [], connectionInfo:JSON.parse(req.query.connection)});
      }
      else if(req.query.action === "addNewConn"){
        resp.render("newConnection", {SessionExists: (req.session.theUser?"Yes":"No"), user:(req.session.theUser?req.session.theUser.firstName:""), errors: [], connectionInfo:{}});
      }

    }
  }
});

router.post("/contact", function(req, res){
  res.render("contact", {SessionExists: (req.session.theUser?"Yes":"No"), user:(req.session.theUser?req.session.theUser.firstName:""), "msg":"Query submitted successfully."});
})

module.exports = router;
