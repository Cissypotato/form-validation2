var userName=document.getElementById('userName'),
	password=document.getElementById('password'),
	passwordC=document.getElementById('passwordC'),
	userRealName=document.getElementById('userRealName'),
	idnumber=document.getElementById('idnumber'),
	mail=document.getElementById('mail'),
	phone=document.getElementById('phone'),
	submit=document.getElementById('submit'),
	two=document.querySelector('.two'),
	three=document.querySelector('.three'),
	checkbox=document.querySelector('.checkbox'),
	pattern=/js/,
	passwordDown=document.querySelector('.passwordDown'),
	prompts=document.querySelectorAll('.prompt');
var test0=false,test1=false,test2=false,test3=false,test4=false,test5=false,test6=false,test7=false;


userName.onblur=function () {
	pattern=/^[a-zA-Z]\w{5,29}$/;
	if (!pattern.exec(userName.value)) {
		prompts[0].style.color='red';
	}else{
		prompts[0].innerHTML="用户名输入正确";
		prompts[0].style.color="green";
		test0=true;
	}
}
password.onblur=function () {
	pattern=/^[a-zA-Z0-9@#$%&*]{6,20}$/;
	if (!pattern.exec(password.value)) {
		prompts[1].innerHTML="请输入6-20位字母,数字或符号";
		prompts[1].style.color='red';
		two.style.background=" #ddd";
		three.style.background=" #ddd";
	}else{
		two.style.background="yellow";
		three.style.background="green";
	    prompts[1].style.display="none";
		test1=true;
	}
}
passwordC.onblur=function () {
	if (passwordC.value!=password.value) {
		prompts[2].innerHTML="密码不能为空";
		prompts[2].style.color='red';
	}else{
		prompts[2].innerHTML="两次输入一致";
		prompts[2].style.color="green";
		test2=true;
	}
}
userRealName.onblur=function () {
	pattern=/^[a-z\u4e00-\u9fa5]{3,30}$/i;
	if (!pattern.exec(userRealName.value)) {
		prompts[3].innerHTML="姓名只能包含中文或英文，且字符在3-30个之间";
		prompts[3].style.color='red';
		prompts[3].style.textDecoration='none';
	}else{
		prompts[3].innerHTML="姓名输入正确";
		prompts[3].style.color="green";
		prompts[3].style.textDecoration='none';
		test3=true;
	}
}
idnumber.onblur=function () {
	pattern=/^[0-9]{17}[0-9x]$/;
	if (!pattern.exec(idnumber.value)) {
		prompts[4].innerHTML="请输入18位身份证号码";
		prompts[4].style.color='red';
		
	}else{
		prompts[4].innerHTML="号码输入正确";
		prompts[4].style.color="green";
		test4=true;
	}
}
mail.onblur=function () {
	pattern=/^\w+@[a-z]+\.com(\.cn)*$/;
	if (!pattern.exec(mail.value)) {
		prompts[5].innerHTML="邮箱不能为空";
		prompts[5].style.color='red';
		
	}else{
		prompts[5].innerHTML="邮箱输入正确";
		prompts[5].style.color="green";
		test5=true;
	}
}
phone.onblur=function () {
	pattern=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
	if (!pattern.exec(phone.value)) {
		prompts[6].innerHTML="您输入的号码不是有效格式";
		prompts[6].style.color='red';
		
	}else{
		prompts[6].innerHTML="手机格式正确";
		prompts[6].style.color="green";
		test6=true;
	}
}

submit.onclick=function(){
	if(test0==false||test1==false||test2==false||test3==false||test4==false||test5==false||
		test6==false||checkbox.checked==false){
		return false; 
	}else{
		// window.location.href="https://www.imooc.com/";不知道为什么跳转不了，求老师解答
		window.open("https://www.imooc.com/");
	}
}