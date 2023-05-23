/*计时器*/
var yanZhengMa_ = document.getElementsByClassName('yanZhengMa')[0];
var time = 60;
var date = null;
function fn() {
    clearTimeout(date)
    date = setInterval(function () {
        time--;
        if (time >= 0) {
            yanZhengMa_.innerHTML = (`${time}秒后重新发送`)
        } else {
            clearTimeout(date)
            yanZhengMa_.innerHTML = (`获取验证码`)
            time = 60;
        }
    }, 100)
}
/*密码比对*/
var pass1_ = document.getElementsByClassName('pass1')[0];
var pass2_ = document.getElementsByClassName('pass2')[0];

function fn1() {
    if (pass1_.value == pass2_.value) {
        alert('欢迎登陆')
    } else {
        alert('两次输入密码不一致，请重新输入')
    }
}