//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}

//时间格式以  YYYY-MM-DD HH:MM:SS 返回
function getNowFormatDate(datetime) {
	var date = new Date(datetime);
	var seperator1 = "-";
	var seperator2 = ":";
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
			+ " " + date.getHours() + seperator2 + date.getMinutes()
			+ seperator2 + date.getSeconds();
	return currentdate;
}

//校验手机号是否可用
 function isPhoneAvailable(phoneInput) {
	var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
	if (!myreg.test(phoneInput)) {
		return false;
	} else {
		return true;
	}
}


//校验密码是否为  数字或字母组成
 function isPasswordAvailable(password) {
	var myreg=/^[a-zA-Z0-9]{8,15}$/;
	if (!myreg.test(password)) {
		return false;
	} else {
		return true;
	}
}