var jsonPlayer = [{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]},{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]},{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]},{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]},{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]},{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]},{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]},{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]},{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]}];
var app = new Vue({
	el: '#listData',
	data:{
		playerNameList:[]
	},
	updated:function(){
		
	},
	mounted: function() {
		
	},
	created() {
		var _this = this;
		_this.playerNameList = jsonPlayer
	},
	methods: {
		
	}
})

/**
 * APP独有
 * 登录界面成功以后存储的数据无法跨webview进行存储
 * 故：登录界面(login.html)登录成功以后，调用父界面的customEvent并将用户信息传递到此方法在进行存储
 */
window.addEventListener('customEvent', function(e){//执行刷新
	sessionStorage.setItem("userInfo",JSON.stringify(e.detail));
});

mui('.mui-content').on('tap', '.mui-col-xs-4', function(e) {
	if(isTrueLogin() != false){
		var type = this.getAttribute("data-type");
		goUrlPage("playerDetail.html");
	}else{
		noLoginPage()
	}
	
})