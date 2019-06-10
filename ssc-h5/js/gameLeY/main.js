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

mui('.mui-content').on('tap', '.mui-col-xs-4', function(e) {
	if(isTrueLogin() != false){
		var type = this.getAttribute("data-type");
		goUrlPage("playerDetail.html");
	}else{
		noLoginPage()
	}
})