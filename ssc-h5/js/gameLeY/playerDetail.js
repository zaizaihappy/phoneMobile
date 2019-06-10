mui.init();
//玩法菜单模拟数据
var jsonPlayer = [{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]},{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]},{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]},{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]},{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]},{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]},{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]},{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]},{"playersName":"玩法类目","playerList":[{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"},{"player":"玩法玩法玩法"}]}];
//列表界面数据
var playerContentList = [{"playerNameclass":"玩法分类名称1","players":[{"xiazhuxiang":"下注项类目1-1","xiazhuxiangclass":[{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"}]},{"xiazhuxiang":"下注项类目1-2","xiazhuxiangclass":[{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"}]}]},{"playerNameclass":"玩法分类名称2","players":[{"xiazhuxiang":"下注项类目2-1","xiazhuxiangclass":[{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"}]},{"xiazhuxiang":"下注项类目2-2","xiazhuxiangclass":[{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"}]}]},{"playerNameclass":"玩法分类名称3","players":[{"xiazhuxiang":"下注项类目3-1","xiazhuxiangclass":[{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"}]},{"xiazhuxiang":"下注项类目3-2","xiazhuxiangclass":[{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"},{"className":"总和大","peilv":"1.955","classId":"12"}]}]}];
var app = new Vue({
	el: '#offCanvasWrapper',
	data:{
		playerNameList:[],
		playerContentList:[]
	},
	updated:function(){
		
	},
	mounted: function() {
		
	},
	created() {
		var _this = this;
		this.getApiClassListData();//玩法菜单列表
		_this.playerContentList = playerContentList
	},
	methods: {
		getApiClassListData:function() {//获取所有玩法数据
			mui.post(BASE_URL + 'play/game/gameTypeList',function(data){
				if(data.success){
					app.playerNameList = data.module;
				}
			})
		}
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
		this.removeChild(this.children[this.children.length-1]);
	}else{
		this.className += " active-xiazhu-style";
		this.innerHTML += '<span class="mui-icon mui-icon-checkmarkempty icon-dui-style"></span>';
	}
	
})