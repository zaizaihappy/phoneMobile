mui.init();
function hasClass(elem, cls) {
  cls = cls || '';
  if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
  return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
}
 
function addClass(ele, cls) {
  if (!hasClass(ele, cls)) {
	ele.className = ele.className == '' ? cls : ele.className + ' ' + cls;
  }
}
 
function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
	var newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' ';
	while (newClass.indexOf(' ' + cls + ' ') >= 0) {
	  newClass = newClass.replace(' ' + cls + ' ', ' ');
	}
	ele.className = newClass.replace(/^\s+|\s+$/g, '');
  }
}

function qiehuanHtml(showHtml,hideHtml){
	document.getElementById(showHtml).style.display = "";
	document.getElementById(hideHtml).style.display = "none";
}

var oBtn = document.getElementById('btn');
var oW,oLeft;
var oSlider=document.getElementById('slider');
var oTrack=document.getElementById('track');
var oIcon=document.getElementById('icon');
var oSpinner=document.getElementById('spinner');
var flag=1;

oBtn.addEventListener('touchstart',function(e){
	console.log("touchstart")
	if(flag==1){
		console.log(e);
		var touches = e.touches[0];
		oW = touches.clientX - oBtn.offsetLeft;
		oBtn.className="button";
		oTrack.className="track";
	}
	
},false);

oBtn.addEventListener("touchmove", function(e) {
	console.log("touchmove")
	if(flag==1){
		var touches = e.touches[0];
		oLeft = touches.clientX - oW;
		if(oLeft < 0) {
			oLeft = 0;
		}else if(oLeft > 200) {
			oLeft = (200);
		}
		oBtn.style.left = oLeft + "px";
		oTrack.style.width=oLeft+ 'px';			
	}
	
},false);

oBtn.addEventListener("touchend",function() {
	console.log("touchend")
	if(oLeft>=(oSlider.clientWidth-oBtn.clientWidth)){
		oBtn.style.left = (document.documentElement.clientWidth - oBtn.offsetWidth-30);
		oTrack.style.width= (document.documentElement.clientWidth - oBtn.offsetWidth-30);
		oIcon.style.display='none';
		oSpinner.style.display='block';				
		flag=0;			
	}else{
		oBtn.style.left = 0;
		oTrack.style.width= 0;
	}
	oBtn.className="button-on";
	oTrack.className="track-on";       
},false);


//登录按钮
loginBtn.addEventListener('tap', function() {
	var username = mui('#username')[0].value;
	var password = mui('#password')[0].value;
	if(username == "" || password == ""){
		mui('#errorMsg')[0].innerHTML = "手机号或密码不能为空";
	}else if(!isPhoneAvailable(username)){
		mui('#errorMsg')[0].innerHTML = "手机号格式输入错误";
	}else if(password.length < 6){
		mui('#errorMsg')[0].innerHTML = "密码不能低于6位";
	}else if(flag != 0){
		mui('#errorMsg')[0].innerHTML = "请向右滑动完成验证";
	}else{
		mui('#errorMsg')[0].innerHTML = "";
		addClass(document.querySelector(".login"), "active")
		setTimeout(function(){
			addClass(document.querySelector(".sk-rotating-plane"), "active")
			document.querySelector(".login").style.display = "none"
		},800)
		
		mui.post(BASE_URL + "/player/info/login",{memberMobile:username,loginPass:password},function(data){
			if(data.success){
				setTimeout(function(){
					removeClass(document.querySelector(".login"), "active")
					removeClass(document.querySelector(".sk-rotating-plane"), "active")
					document.querySelector(".login").style.display = "block"
				},1000)
				
				sessionStorage.setItem("userInfo",JSON.stringify(data.module))
				mui('#errorMsg')[0].className = "success-msg-style";
				mui('#errorMsg')[0].innerHTML = "欢迎您的到来！";
				mui.toast('欢迎您的到来');
				setTimeout(function(){
					var aniShow = mui.os.plus ? "slide-in-right" : "zoom-fade-out";
					mui.openWindow({
						url: "../userCenter/main.html",
						id: "userCenterMain",
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
				},1000)
			}else{
				mui('#errorMsg')[0].innerHTML = data.errorMsg;
			}
		})
	}
})

//注册时获取手机验证码按钮
var countdown = 60;
getPhoneCodeMsg.addEventListener('tap', function() {
	var memberMobile  = mui('#memberMobile')[0].value;
	if(memberMobile == ""){
		mui('#errorMsg2')[0].innerHTML = "注册手机号不能为空";
	}else if(!isPhoneAvailable(memberMobile)){
		mui('#errorMsg2')[0].innerHTML = "手机号格式输入错误";
	}else{
		var codeBtn = mui("#getPhoneCodeMsg")[0];
		codeBtn.disabled = true;
		
		//发送手机验证码
		mui.post(BASE_URL + "/player/info/sendVerifyCode",{mobile:memberMobile},function(data){
			if(data.success){
				mui.toast('验证码已发送');
				//发送调用手机验证码的接口
				codeButton(codeBtn)
			}else{
				mui.toast(data.errorDetail);
			}
		})
		
	}
})

function codeButton(codeBtn){
	if (countdown == 0) {
		codeBtn.disabled = false;
		codeBtn.innerHTML = "验证码";
		countdown = 60;  
		return false;  
	} else {
		codeBtn.innerHTML = countdown;
		countdown--;  
	}  
	setTimeout(function() {  
		codeButton(codeBtn);  
	},1000);  
}

//注册按钮
registerBtn.addEventListener('tap', function() {
	var memberMobile  = mui('#memberMobile')[0].value;//手机号
	var codeMsg  = mui('#codeMsg')[0].value;//验证码
	var loginPass  = mui('#loginPass')[0].value;//密码
	var loginPass2  = mui('#loginPass2')[0].value;//确认密码
	
	if(memberMobile == "" || codeMsg == ""|| loginPass == "" || loginPass2 == ""){
		mui('#errorMsg2')[0].innerHTML = "有内容填写不完善";
	}else if(!isPhoneAvailable(memberMobile)){
		mui('#errorMsg2')[0].innerHTML = "手机号格式输入错误";
	}else if(loginPass.length < 6){
		mui('#errorMsg2')[0].innerHTML = "密码不能低于6位";
	}else if(!isPasswordAvailable(loginPass)){
		mui('#errorMsg2')[0].innerHTML = "密码格式错误，必须由字母和数字组成";
	}else if(loginPass != loginPass2){
		mui('#errorMsg2')[0].innerHTML = "两次密码输入不一致";
	}else{
		mui('#errorMsg2')[0].innerHTML = "";
		
		addClass(document.querySelector(".login"), "active")
		setTimeout(function(){
			addClass(document.querySelector(".sk-rotating-plane"), "active")
			document.querySelector(".login").style.display = "none"
		},800)
		
		mui.post(BASE_URL + "/player/info/register",{
			memberMobile:memberMobile,
			registerDate:getNowFormatDate(new Date()),
			loginPass:loginPass,
			regType:1
		},function(data){
			if(data.success){
				//注册成功
				mui('#errorMsg')[0].className = "success-msg-style";
				mui('#errorMsg')[0].innerHTML = "恭喜您已成功注册，请登录~";
				mui.toast('恭喜您已成功注册');
				
				setTimeout(function(){
					removeClass(document.querySelector(".login"), "active")
					removeClass(document.querySelector(".sk-rotating-plane"), "active")
					document.querySelector(".login").style.display = "block"
				},1000)
				//关闭动画
				// removeClass(document.querySelector(".login"), "active")
				// removeClass(document.querySelector(".sk-rotating-plane"), "active")
				// document.querySelector(".login").style.display = "block"
				
				//手机号同步到登录界面显示
				mui('#username')[0].value = memberMobile;
				//清除注册的信息
				mui('#memberMobile')[0].value = "";
				mui('#codeMsg')[0].value = "";
				mui('#loginPass')[0].value = "";
				mui('#loginPass2')[0].value = "";
				
				//切换到登录界面
				document.getElementById("loginHtml").style.display = "";
				document.getElementById("registerHtml").style.display = "none";
			}else{
				mui.toast(data.errorDetail);
			}
		});
		
	}
})