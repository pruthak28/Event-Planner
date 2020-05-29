function fillConnectionInfo(Topic, connTime, Desc){
//function pre populates the data into new connection page for update operation.
  if(Topic != "" || connTime != ""){
    //topic, details, date, from, fromSuffix, to, toSuffix

    document.getElementById("topic").value = Topic;
    document.getElementById("details").value = Desc;
    //Saturday, March 29, 2020|5:30pm - 6:30pm
    var longDate = connTime.split(",");
    var splitDateTime = ((longDate.length >0)?(longDate[1]+longDate[2]).split("|"):"");
    var setDt = new Date(((splitDateTime.length>0)?splitDateTime[0]:""));
    console.log(setDt.toISOString());
    document.getElementById("date").value = setDt.toISOString().slice(0,10);
    if(splitDateTime.length>0){
      var setT = splitDateTime[1].split(" - ");
      if(setT != ""){
        var fromT = setT[0];
        var ToTime = setT[1];
        document.getElementById("from").value = fromT.substring(0, fromT.length-2);
        document.getElementById("fromSuffix").value = fromT.substring(fromT.length-2, fromT.length);
        document.getElementById("to").value = ToTime.substring(0, ToTime.length-2);
        document.getElementById("toSuffix").value = ToTime.substring(ToTime.length-2, ToTime.length);
      }
    }
  }
}
