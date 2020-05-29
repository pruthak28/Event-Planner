var express = require('express');
var appRoot= require('app-root-path');
var session = require("express-session");
var otherRoutes = require("./controller/otherRoutes.js");
var routes = require("./controller/routes.js");
var ProfileController = require("./controller/ProfileController.js");
var app = express();
//initialization of express session
app.use(session({secret: "Milestone3", resave: false, saveUninitialized: true}));
//initilizing view engine
app.engine('html', require('ejs').renderFile);
app.set("view engine", "ejs");
app.set('views',  appRoot + "/views");

//hosts assets folder
app.use("/assets", express.static(appRoot + "/assets"));


app.use("/", otherRoutes);
app.use("/", routes);
app.use("/", ProfileController);
app.get("/*", function(req, resp){
  resp.render("index", {SessionExists: (req.session.theUser?"Yes":"No"), user:(req.session.theUser?req.session.theUser.firstName:"")});
});

app.listen(8080);
