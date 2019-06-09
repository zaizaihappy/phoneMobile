mui.init();
//禁止界面元素晃动
document.getElementsByClassName("mui-content")[0].ontouchmove = function (e) {e.preventDefault();};	
mui('.mui-content').on('tap', '.mui-col-sm-3', function(e) {
	if(isTrueLogin() != false){
		var	gourl = this.getAttribute('data-gourl');//获取跳转的界面路径
		goUrlPage(gourl);
	}else{
		mui.toast("请登录后查看")
		setTimeout(function(){
			goUrlPage("../other/login.html");
		},1500)
	}
});