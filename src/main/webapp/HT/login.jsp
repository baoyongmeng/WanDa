<%@ page language="java" contentType="text/html; charset=utf-8" isELIgnored="false"
    pageEncoding="utf-8"%>
<% String path = request.getContextPath(); %>
<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>后台管理登录</title>
  <meta name="description" content="è¿æ¯ä¸ä¸ª index é¡µé¢">
  <meta name="keywords" content="index">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="renderer" content="webkit">
  <meta http-equiv="Cache-Control" content="no-siteapp" />
  <link rel="icon" type="image/png" href="<%=path%>/HT/assets/i/favicon.png">
  <link rel="apple-touch-icon-precomposed" href="<%=path%>/HT/assets/i/app-icon72x72@2x.png">
  <meta name="apple-mobile-web-app-title" content="Amaze UI" />
  <link rel="stylesheet" href="<%=path%>/HT/assets/css/amazeui.min.css" />
  <link rel="stylesheet" href="<%=path%>/HT/assets/css/admin.css">
  <link rel="stylesheet" href="<%=path%>/HT/assets/css/app.css">
</head>

<body data-type="login">

  <div class="am-g myapp-login">
	<div class="myapp-login-logo-block  tpl-login-max">
		<div class="myapp-login-logo-text">
			<div class="myapp-login-logo-text">
				万达 WD<span> Login</span> <i class="am-icon-skyatlas"></i>
				
			</div>
		</div>

		<div class="login-font">
			<i>Log In </i><!--  or <span> Sign Up</span> -->
		</div>
		<div class="am-u-sm-10 login-am-center">
			<form class="am-form" action="<%=path%>/User/Login" method="post">
				<fieldset>
					<div class="am-form-group">
						<input type="text" class="" id="doc-ipt-email-1" name="UserAccount" placeholder="请输入账户名">
					</div>
					<div class="am-form-group">
						<input type="password" class="" id="doc-ipt-pwd-1" name="UserPassword" placeholder="请输入账户密码">
					</div>
					<p><button type="submit" class="am-btn am-btn-default">登录</button></p>
				</fieldset>
			</form>
		</div>
	</div>
</div>

  <script src="<%=path%>/HT/assets/js/jquery.min.js"></script>
  <script src="<%=path%>/HT/assets/js/amazeui.min.js"></script>
  <script src="<%=path%>/HT/assets/js/app.js"></script>
</body>

</html>