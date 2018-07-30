function userQuery() {
    var currentUser = Bmob.User.current();
    if(currentUser == null){
        Bmob.User.logOut();
        $(location).attr('href', './login.html');
    }
    var User = Bmob.Object.extend("User");
    var query = new Bmob.Query(User);
    console.log(currentUser.id);
    query.get(currentUser.id, {

        success: function (user) {
            // 查询成功，调用get方法获取对应属性的值
            var userName = user.get("userName");
            // var options = $("#sex option:selected");
            var sex = user.get("sex");
            var organization = user.get("organization");
            var duty = user.get("duty");
            var address = user.get("address");
            //console.log(options.val());

            document.getElementById("userName").value = (userName == null ? "" : userName);
            //document.getElementById(sex).value = (options == null ? "" : options);
            $("#sex").val(sex);
            //  document.getElementById(sex).selected = true;
            // $("#sex").find("option[value='"+sex+"']").attr("selected",true);
            // console.log($("#sex").val(sex));
            //    document.getElementById("sex").options[1].value= sex;
            document.getElementById("organization").value = (organization == undefined ? "" : organization);
            document.getElementById("duty").value = (duty == undefined ? "" : duty);
            // document.getElementById("address").value = (address == undefined ? "" : address);
            document.getElementById("address").value = (address == undefined ? "" : address);
        },
        error: function (object, error) {
            // 查询失败
            alert("获取数据失败");
        }
    });
}
userQuery();