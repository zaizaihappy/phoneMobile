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

mui('.mui-content').on('tap', '.mui-col-xs-4', function(e) {
	var type = this.getAttribute("data-type");
	mui.openWindow({
		url: "playerDetail.html",
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
})

//公用返回按钮
backBtn.addEventListener('tap', function() {
	mui.back();
})