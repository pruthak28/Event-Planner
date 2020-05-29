function changeHeader(session, user){
  if(session === "Yes"){
    setTimeout(function(){
      //Changing buttons text when user logged
      //Login to Logout
      $("#login").html("&nbsp;<img class='headerMenuImg' src='/assets/images/exit.png' alt='logout'>Logout");
      $("#login").parent().attr("action","/logout?action=signout");
      $("#login").css("width","120px");
      //SignUp to My Connections
      $("#signUp").html("&nbsp;&nbsp;<img class='headerMenuImg' src='/assets/images/teamwork.png' alt='my connections'>My Connections");
      $("#signUp").parent().attr("action","/savedConnections");
      $("#signUp").css("width","180px");
      $("#LoggedInUserMsg").html("Welcome " + (user!=""?user:"Prutha") + "!");
      $("#LoggedInUserMsg").css("display","inline");
      $("#LoggedInUserMsg").css("cursor","none !important");
      $("#LoggedInUserMsg").css("color","#ffcc00");
    }, 10);
  }
}
