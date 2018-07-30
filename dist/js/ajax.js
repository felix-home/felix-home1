

require(['bmob-min','jquery'],function($){
Bmob.initialize("7f6188f706fb1fa6f4bf7536dee9c0e2", "556ffc74181e3c9dea2989f4786997eb");
console.log(111);
function myQuery(){
console.log(222);
  var User = Bmob.Object.extend("User");
    var query = new Bmob.Query(User);
      query.get("2e398ebc75", {
        success: function(object) {
          console.log(object.get("userName"));
           console.log(object.get("address"));
        // The object was retrieved successfully.
        //alert(object.get("score"));
        // document.getElementById("123").value=document.write(object.get("score"));;
      //$('#qqq').html(object.get("score"));
      //$('#p').html(object.get("address"));
      document.getElementById("#p").innerHTML = "aaas"; 
      // document.getElementById("#p").innerHTML = object.get("userName"); 
      //document.getElementById("#userName").innerHTML = object.get("userName"); 
      //document.getElementById("#address").innerHTML = object.get("address"); 
        return object;

        // 
      },
      error: function(object, error) {
      alert("query object fail");
    }
  });


  
  }
myQuery();
 });






