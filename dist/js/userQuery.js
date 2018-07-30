function userQuery() {
    var currentUser = Bmob.User.current();
    var User = Bmob.Object.extend("User");
    var query = new Bmob.Query(User);
    console.log(currentUser.id);
    query.get(currentUser.id, {

        success: function (user) {
            // 查询成功，调用get方法获取对应属性的值
            var userName = user.get("userName");
            var sex = user.get("sex");
            var organization = user.get("organization");
            var duty = user.get("duty");
            var address = user.get("address");
            console.log(userName);
           document.getElementById("userName").innerHTML = userName;
           document.getElementById("userName").value=userName;
           document.getElementById("sex").innerHTML = sex;
            document.getElementById("organization").innerHTML = organization;
            document.getElementById("duty").innerHTML = duty;
            document.getElementById("address").innerHTML = address;
        },
        error: function (object, error) {
            // 查询失败
            alert("获取数据失败");
        }
    });
}
userQuery();