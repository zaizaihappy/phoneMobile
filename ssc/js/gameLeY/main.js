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
		this.getApiListData();
	},
	methods: {
		getApiListData:function() {//获取所有玩法数据
			mui.post(BASE_URL + 'play/game/gameTypeList',function(data){
				if(data.success){
					app.playerNameList = data.module;
				}
			})
		}
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