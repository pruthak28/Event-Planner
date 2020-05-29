function isValidConnectionID(connId){
  if(connId != ""){
      if(connId.length == 5){
        if(connId.substr(0,3) === "CON" && !isNaN(parseInt(connId.substr(3,connId.length-1)) ) )
        {
            return true;
        }
        else{
          return false;
        }
      }
      else {
        return false;
      }
    }
  else{
      return false;
  }
}

module.exports.isValidConnectionID = isValidConnectionID
