var BASE_URL = "http://192.168.31.174:8080/hwgame/";
//刘海屏顶部适配
mui.plusReady(function() {
	plus.navigator.setStatusBarBackground("#000000");
});
//禁止界面晃动
// document.getElementsByClassName("mui-content")[0].ontouchmove = function (e) {e.preventDefault();};
var aniShow = mui.os.plus ? "slide-in-right" : "zoom-fade-out";
//判断当前是否登录
function getUserInfo(){
	var userinfo = sessionStorage.getItem("userInfo");
	if(userinfo){
		return userinfo;
	}else{
		mui.toast("请登录后查看")
		setTimeout(function(){
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
		},1500)
	}
}

//公用底部导航栏跳转
mui('.mui-bar-tab').on('tap', 'a', function(e) {
	var targetTab = this.getAttribute('href');
	mui.openWindow({
		url: targetTab,
		extras: {
			id: '100'
		},
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
});

function btnClick(){
	window.history.back(-1)
}