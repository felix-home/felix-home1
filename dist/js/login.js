$(function () {
    $('#login').click(function () {
        Bmob.User.logIn($("#username").val(), $("#password").val(), {
            success: function (user) {
                $(location).attr('href', './query.html');
            },
            error: function (user, error) {
                // The login failed. Check error to see why.
                // alert("Error: " + error.code + " " + error.message);
                alert("密码错误");
            }
        });
    });
});
// $(function () {
//     $('#register').click(function () {
//         $(location).attr('href', './register.html');
//         console.log(11);
//     });
// });

