//var allurl = "http://songc.s1.natapp.cc/Cargo";
//var allurl = "http://192.168.0.155:8080/Cargo";
var allurl = "http://huobang.fzbox.net/Cargo";
//var allurl = "http://songclovelij.top/Cargo";
var huobang_loginId;
var pagesize = 4;
if(localStorage.getItem("huobang_loginId") != null){
	huobang_loginId = localStorage.getItem("huobang_loginId");
};
var loginuser;
if(localStorage.getItem("huobang_loginuser") != null){
	
	loginuser = JSON.parse(localStorage.getItem("huobang_loginuser"));
};

function alertLoginMsg(){
	alert("你已在其他地点登录");
}
