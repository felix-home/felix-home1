// $(document).ready(function () {
//     $("#register").click(function () {
//         window.location.href = './register.html';
//     });
//     $("#submit").click(function () {
//         //window.location.href = './test.html';
//         window.location = './test.html';
//     });
// });
// function test() {
//     $("#submit").click(function () {
//         //window.location.href = './test.html';
//         window.location = './test.html';
//       window.location.href = './test.html';
//     });
//       }
// test();
$(function () {
    //注册
    $('#registerUser').click(function () {
        $(location).attr('href', './register.html');
    });
    //退出
    $('#logOut').click(function () {
        Bmob.User.logOut();
        $(location).attr('href', './login.html');
    });
    //个人信息
    $('#userdata').click(function () {
        $(location).attr('href', './userdata.html');
    });
    //账号安全
    $('#security').click(function () {
        $(location).attr('href', './security.html');
    });
});