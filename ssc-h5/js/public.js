var BASE_URL = "http://192.168.31.174:8080/hwgame/";
//刘海屏顶部适配
mui.plusReady(function() {
	plus.navigator.setStatusBarBackground("#000000");
});

//判断当前是否登录
function getUserInfo(){
	var userinfo = sessionStorage.getItem("userInfo");
	if(userinfo){
		return userinfo;
	}else{
		var aniShow = mui.os.plus ? "slide-in-right" : "zoom-fade-out";
		mui.openWindow({
			url: "../other/login.html",
			id: "info",
			styles: {
				popGesture: "close",
				statusbar: {
					background: "#f7f7f7"
				}
			},
			show: {
				aniShow: aniShow,
				duration: 300
			}
		});
	}
}