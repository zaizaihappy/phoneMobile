mui.init();
getUserInfo();
//禁止界面元素晃动
document.getElementsByClassName("mui-content")[0].ontouchmove = function (e) {e.preventDefault();};	
mui('.mui-content').on('tap', '.mui-col-sm-3', function(e) {
	var gourl = this.getAttribute('data-gourl');//获取跳转的界面路径
	goUrlPage(gourl);
});