mui.init();
var jsonPlayer = [{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]},{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]},{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]},{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]},{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]},{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]},{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]},{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]},{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]}];
var app = new Vue({
	el: '#offCanvasWrapper',
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
//侧滑容器父节点
var offCanvasWrapper = mui('#offCanvasWrapper');
//主界面容器
var offCanvasInner = offCanvasWrapper[0].querySelector('.mui-inner-wrap');
//菜单容器
var offCanvasSide = document.getElementById("offCanvasSide");
//移动效果是否为整体移动
var moveTogether = false;
//侧滑容器的class列表，增加.mui-slide-in即可实现菜单移动、主界面不动的效果；
var classList = offCanvasWrapper[0].classList;
//变换侧滑动画移动效果；

//主界面和侧滑菜单界面均支持区域滚动；
mui('#offCanvasSideScroll').scroll();
mui('#content1').scroll();
//实现ios平台原生侧滑关闭页面；
if (mui.os.plus && mui.os.ios) {
	mui.plusReady(function() { //5+ iOS暂时无法屏蔽popGesture时传递touch事件，故该demo直接屏蔽popGesture功能
		plus.webview.currentWebview().setStyle({
			'popGesture': 'none'
		});
	});
}

mui('#segmentedControlContents').on('tap', '.xiazhu-style', function(e) {
	
	if(this.className.indexOf("active-xiazhu-style") > 0){
		this.className = "xiazhu-style";
		var remove = this.innerHTML.split("<span");
		this.innerHTML = remove[0]
	}else{
		this.className += " active-xiazhu-style";
		this.innerHTML += '<span class="mui-icon mui-icon-checkmarkempty icon-dui-style"></span>';
	}
	
})