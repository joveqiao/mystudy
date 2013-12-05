//function formalTips(msg) {
//	art.dialog.alert(msg);
//}
//
//$(document).ready(function () {
//
//    //登陆页面表单验证
//    $.formValidator.initConfig({ formID: "form1", mode: 'AlertTip',
//        onError: function(){formalTips(msg);},
//        onAlert: function(){formalTips(msg);}
//    });
//    $("#userName").formValidator({ defaultValue: "登录账户" }).inputValidator({ min: 2, onError: "用户名输入格式不正确！" });
//    $("#userPwd").inputValidator({ min: 6, onError: "密码输入不正确，请输入6~16位的密码，注意大小写！" });
//    $("#ymz").formValidator({ defaultValue: "验证码" }).inputValidator({ min: 4, onError: "请输入四位验证码！" });
//    ////-----------------------------分割----------------------------
//
//    //修改初始密码页面表单验证
//    $("#password1").inputValidator({ min: 6, max: 16, empty: { leftEmpty: false, rightEmpty: false, emptyError: "密码两边不能有空符号" }, onError: "请输入6~16位的新密码" }).compareValidator({ desID: "userPwd", operateor: "!=", onError: "新密码不能和初始密码一样" });
//    $("#password2").inputValidator({ min: 6, empty: { leftEmpty: false, rightEmpty: false, emptyError: "重复密码两边不能有空符号" }, onError: "重复密码不能为空,请确认" }).compareValidator({ desID: "password1", operateor: "=", onError: "两次次密码不一致,请确认" });
//});
