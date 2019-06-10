mui.init();
/**
 * APP独有
 * 登录界面成功以后存储的数据无法跨webview进行存储
 * 故：登录界面(login.html)登录成功以后，调用父界面的customEvent并将用户信息传递到此方法在进行存储
 */
// window.addEventListener('customEvent', function(e){//执行刷新
// 	localStorage.setItem("userInfo",JSON.stringify(e.detail));
// });

//禁止界面元素晃动
document.getElementsByClassName("mui-content")[0].ontouchmove = function (e) {e.preventDefault();};	
mui('.mui-content').on('tap', '.mui-col-sm-3', function(e) {
	if(isTrueLogin() != false){
		var	gourl = this.getAttribute('data-gourl');//获取跳转的界面路径
		goUrlPage(gourl);
	}else{
		noLoginPage()
	}
});