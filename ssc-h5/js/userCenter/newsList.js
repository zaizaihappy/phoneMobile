var jsondata = [
	{"title":"公告标题内容","time":"2019-05-05 20:00:00","image":"../../images/user_center_background.jpg","content":"这里显示文章摘要，让读者对文章内容有个粗略的概念对文章内容有个粗略的概念对文章内容有个粗略的概念对文章内容有个粗略的概念对文章内容有个粗略的概念对文章内容有个粗略的概念对文章内容有个粗略的概念"},
	{"title":"公告标题内容","time":"2019-05-05 20:00:00","content":"这里显示文章摘要，让读者对文章内容有个粗略的概念对文章内容有个粗略的概念对文章内容有个粗略的概念对文章内容有个粗略的概念对文章内容有个粗略的概念对文章内容有个粗略的概念对文章内容有个粗略的概念"},
	{"title":"公告标题内容","time":"2019-05-05 20:00:00","content":"这里显示文章摘要，让读者对文章内容有个粗略的概念对文章内容有个粗略的概念对文章内容有个粗略的概念对文章内容有个粗略的概念对文章内容有个粗略的概念对文章内容有个粗略的概念对文章内容有个粗略的概念"},
	{"title":"公告标题内容","time":"2019-05-05 20:00:00","content":"这里显示文章摘要，让读者对文章内容有个粗略的概念对文章内容有个粗略的概念对文章内容有个粗略的概念对文章内容有个粗略的概念对文章内容有个粗略的概念对文章内容有个粗略的概念对文章内容有个粗略的概念"},
	{"title":"公告标题内容","time":"2019-05-05 20:00:00","content":"这里显示文章摘要，让读者对文章内容有个粗略的概念对文章内容有个粗略的概念对文章内容有个粗略的概念对文章内容有个粗略的概念对文章内容有个粗略的概念对文章内容有个粗略的概念对文章内容有个粗略的概念"}
];
var count = 0;
var app = new Vue({
	el: '#listData',
	data:{
		newsListData:[]
	},
	updated:function(){
		
	},
	mounted: function() {
		
	},
	created() {
		var _this = this;
	},
	methods: {
		pullupRefresh:function() {
			setTimeout(function() {
				if(count < 3){
					app.newsListData = app.newsListData.concat(jsondata);
					count++;
					mui('#pullrefresh').pullRefresh().endPullupToRefresh();
				}else{
					//没有数据
					mui('#pullrefresh').pullRefresh().endPullupToRefresh(true);
				}
			}, 1500);
		},
		pulldownRefresh:function(){
			setTimeout(function() {
				app.newsListData = jsondata;
				mui('#pullrefresh').pullRefresh().endPulldownToRefresh();
				mui.toast("数据已更新");
			}, 1500);
		}
	}
})

mui.init({
	pullRefresh: {
		container: '#pullrefresh',
		down: {
			style:'circle',
			callback: app.pulldownRefresh
		},
		up: {
			auto:true,//首次打开调用
			contentrefresh: '正在不要命的加载...',
			callback: app.pullupRefresh
		}
	}
});