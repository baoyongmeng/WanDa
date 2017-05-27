<%@ page language="java" contentType="text/html; charset=utf-8"
	isELIgnored="false" pageEncoding="utf-8"%>
<% String path = request.getContextPath(); %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<!-- saved from url=(0046)http://js.itivy.com/43-contact-form/index.html -->
<html lang="en">
<!--<![endif]-->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Modal Box Contact Form</title>
<link rel="stylesheet" href="<%=path%>/HT/Modal Box Contact Form_files/style.css">
<script type="text/javascript">
<!--验证手机号-->
function checkMobile(){ 
    var sMobile = document.f1.UserMobile.value 
    if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))){ 
        alert("不是完整的11位手机号或者正确的手机号前七位！！"); 
        document.f1.UserMobile.focus(); 
        return false; 
    } 
} 
<!--验证登陆名-->
	function checkUser() {
		var UserAccount = document.f1.UserAccount.value
		var re = /^[a-zA-z]\w{3,15}$/;
		if (!(re.test(UserAccount))) {
			alert("登录名格式错误！！");
			document.f1.UserAccount.focus(); 
			return false;
		}
	}
	function check() {
		
		if(checkUser()==false || checkMobile()==false){
			return false;
		}
	}
	
</script>

</head>
<body>


	<form action="<%=path%>/User/AddUser" class="contact" method="post" name="f1" onsubmit="return check();">
		<fieldset class="contact-inner">
			<p class="contact-input">
				
				账户名<input type="text" name="UserAccount" placeholder="请输入登陆名">
				账户密码<input type="text" name="UserPassword" placeholder="请输入登陆密码">
				用户名<input type="text" name="UserName" placeholder="请输入用户名">
				用户电话<input type="text" name="UserMobile" placeholder="请输入电话">
			</p>

			<p class="contact-input">
				<label for="select" class="select"> <select name="RoleId"
					id="select">
						<c:forEach items="${roleList}" var="role">

							<option value="${role.id}">${role.roleName}</option>

						</c:forEach>
				</select>
				</label>
			</p>

			<p class="contact-submit">
				<input type="submit" value="Send Message">
			</p>
		</fieldset>
	</form>
	</div>


</body>
</html>