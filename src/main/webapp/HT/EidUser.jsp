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

</head>
<body>


	<form
		action="./Modal Box Contact Form_files/Modal Box Contact Form.html"
		class="contact">
		<fieldset class="contact-inner">
			<p class="contact-input">
			
				ID<input type="text" name="Id" placeholder="${user.id}" value="${user.id}" autofocus="">
				账户名<input type="text" name="UserAccount" placeholder="${user.userAccount}" value="${user.userAccount}" autofocus="">
				账户密码<input type="text" name="UserPassword" placeholder="${user.userPassword}" value="${user.userPassword}" autofocus="">
				用户名<input type="text" name="UserName" placeholder="${user.userName}" value="${user.userName}" autofocus="">
				用户电话<input type="text" name="UserMobile" placeholder="${user.userMobile}" value="${user.userMobile}" autofocus="">
				用户权限<input type="text" name="RoleId" placeholder="${user.roleId}" value="${user.roleId}" autofocus="">
				用户创建时间<input type="text" name="RoleId" placeholder="${user.createTime}" value="${user.createTime}" autofocus="">
			</p>

			<p class="contact-input">
				<label for="select" class="select"> <select name="RoleId"
					id="select">
						<option value="" selected="">Choose Subject…</option>
						<option value="1">I have a suggestion</option>
						<option value="1">I found a bug</option>
						<option value="1">Other</option>
				</select>
				</label>
			</p>

			<p class="contact-input">
				<textarea name="message" placeholder="Your Message…"></textarea>
			</p>

			<p class="contact-submit">
				<input type="submit" value="Send Message">
			</p>
		</fieldset>
	</form>
	</div>


</body>
</html>