$(function () {
    $('#saveUser').click(function () {
        //创建类和实例
        var currentUser = Bmob.User.current();
        var User = Bmob.Object.extend("User");
        var user = new Bmob.Query(User);
        var s = $("#userName").val();
        console.log(s);
        user.get(currentUser.id, {
            success: function (user) {
                // 回调中可以取得这个 GameScore 对象的一个实例，然后就可以修改它了
                user.fetchWhenSave(true);
                var s = $("#sex").val();
               // alert("sex:"+s);
                //$("#sex option:selected")
                console.log(s);
                user.set("userName", $("#userName").val());
                user.set("sex", s);
                user.set("organization",$("#organization").val());
                user.set("duty", $("#duty").val());
                user.set("address", $("#address").val());
                user.save();
                $(location).attr('href', './userdata.html');
                // The object was retrieved successfully.
            },
            error: function (object, error) {
                alert("保存失败，请重新保存");
            }

        });

    });

});