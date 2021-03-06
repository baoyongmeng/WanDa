<%@ page language="java" contentType="text/html; charset=utf-8"
	isELIgnored="false" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!doctype html>
<html>

<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Amaze UI Admin index Examples</title>
<meta name="description" content="这是一个 index 页面">
<meta name="keywords" content="index">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="renderer" content="webkit">
<meta http-equiv="Cache-Control" content="no-siteapp" />
<link rel="icon" type="image/png"
	href="<%=path%>/HT/assets/i/favicon.png">
<link rel="apple-touch-icon-precomposed"
	href="<%=path%>/HT/assets/i/app-icon72x72@2x.png">
<meta name="apple-mobile-web-app-title" content="Amaze UI" />
<link rel="stylesheet" href="<%=path%>/HT/assets/css/amazeui.min.css" />
<link rel="stylesheet" href="<%=path%>/HT/assets/css/admin.css">
<link rel="stylesheet" href="<%=path%>/HT/assets/css/app.css">
</head>
<script>
function Really(id)

{
        //利用对话框返回的值 （true 或者 false）
        //alert(id)
 
    if(confirm("确认删除吗？"))
 
    {
            //如果是true ，那么就把页面转向thcjp.cnblogs.com 
        location.href="<%=path%>/User/DeleteUser?Id="+id;
     } 
    else
     {
        //否则说明下了，赫赫 
      alert("您已取消删除操作");
    }
}
function judgePage(page,total) {
	
	//alert(page);
	//alert(total);
	
	if(page <=0 || page > total){
		alert("没有页码啦！别按啦！")
	}
	else{
		location.href="<%=path%>/User/QueryAll?page="+page;
	}
}
function Select() {
	//alert("!!!!!!!!")
	var roleURL = document.getElementById("sel").value;
	//alert(roleURL);
	location.href=roleURL;
}
function SouSuo() {
	//alert("!!!!!!!!")
	var SSvalue = document.getElementById("SouSuo").value;
	//alert(SSvalue);
	location.href="<%=path%>/User/QueryByAConditions?str="+SSvalue;
}
</script>

<body data-type="generalComponents">


	<header class="am-topbar am-topbar-inverse admin-header">
		<div class="am-topbar-brand">
			<a href="javascript:;" class="tpl-logo"> <img
				src="<%=path%>/HT/assets/img/logo.png" alt="">
			</a>
		</div>
		<div
			class="am-icon-list tpl-header-nav-hover-ico am-fl am-margin-right">

		</div>

		<button
			class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only"
			data-am-collapse="{target: '#topbar-collapse'}">
			<span class="am-sr-only">导航切换</span> <span class="am-icon-bars"></span>
		</button>

		<div class="am-collapse am-topbar-collapse" id="topbar-collapse">

			<ul
				class="am-nav am-nav-pills am-topbar-nav am-topbar-right admin-header-list tpl-header-list">
				<li class="am-dropdown" data-am-dropdown data-am-dropdown-toggle>
					<a class="am-dropdown-toggle tpl-header-list-link"
					href="javascript:;"> <span class="am-icon-bell-o"></span> 提醒 <span
						class="am-badge tpl-badge-success am-round">5</span></span>
				</a>
					<ul class="am-dropdown-content tpl-dropdown-content">
						<li class="tpl-dropdown-content-external">
							<h3>
								你有 <span class="tpl-color-success">5</span> 条提醒
							</h3> <a href="###">全部</a>
						</li>
						<li class="tpl-dropdown-list-bdbc"><a href="#"
							class="tpl-dropdown-list-fl"><span
								class="am-icon-btn am-icon-plus tpl-dropdown-ico-btn-size tpl-badge-success"></span>
								【预览模块】移动端 查看时 手机、电脑框隐藏。</a> <span class="tpl-dropdown-list-fr">3小时前</span>
						</li>
						<li class="tpl-dropdown-list-bdbc"><a href="#"
							class="tpl-dropdown-list-fl"><span
								class="am-icon-btn am-icon-check tpl-dropdown-ico-btn-size tpl-badge-danger"></span>
								移动端，导航条下边距处理</a> <span class="tpl-dropdown-list-fr">15分钟前</span></li>
						<li class="tpl-dropdown-list-bdbc"><a href="#"
							class="tpl-dropdown-list-fl"><span
								class="am-icon-btn am-icon-bell-o tpl-dropdown-ico-btn-size tpl-badge-warning"></span>
								追加统计代码</a> <span class="tpl-dropdown-list-fr">2天前</span></li>
					</ul>
				</li>
				<li class="am-dropdown" data-am-dropdown data-am-dropdown-toggle>
					<a class="am-dropdown-toggle tpl-header-list-link"
					href="javascript:;"> <span class="am-icon-comment-o"></span> 消息
						<span class="am-badge tpl-badge-danger am-round">9</span></span>
				</a>
					<ul class="am-dropdown-content tpl-dropdown-content">
						<li class="tpl-dropdown-content-external">
							<h3>
								你有 <span class="tpl-color-danger">9</span> 条新消息
							</h3> <a href="###">全部</a>
						</li>
						<li><a href="#" class="tpl-dropdown-content-message"> <span
								class="tpl-dropdown-content-photo"> <img
									src="<%=path%>/HT/assets/img/user02.png" alt="">
							</span> <span class="tpl-dropdown-content-subject"> <span
									class="tpl-dropdown-content-from"> 禁言小张 </span> <span
									class="tpl-dropdown-content-time">10分钟前 </span>
							</span> <span class="tpl-dropdown-content-font"> Amaze UI 的诞生，依托于
									GitHub 及其他技术社区上一些优秀的资源；Amaze UI 的成长，则离不开用户的支持。 </span>
						</a> <a href="#" class="tpl-dropdown-content-message"> <span
								class="tpl-dropdown-content-photo"> <img
									src="<%=path%>/HT/assets/img/user03.png" alt="">
							</span> <span class="tpl-dropdown-content-subject"> <span
									class="tpl-dropdown-content-from"> Steam </span> <span
									class="tpl-dropdown-content-time">18分钟前</span>
							</span> <span class="tpl-dropdown-content-font"> 为了能最准确的传达所描述的问题，
									建议你在反馈时附上演示，方便我们理解。 </span>
						</a></li>

					</ul>
				</li>
				<li class="am-dropdown" data-am-dropdown data-am-dropdown-toggle>
					<a class="am-dropdown-toggle tpl-header-list-link"
					href="javascript:;"> <span class="am-icon-calendar"></span> 进度
						<span class="am-badge tpl-badge-primary am-round">4</span></span>
				</a>
					<ul class="am-dropdown-content tpl-dropdown-content">
						<li class="tpl-dropdown-content-external">
							<h3>
								你有 <span class="tpl-color-primary">4</span> 个任务进度
							</h3> <a href="###">全部</a>
						</li>
						<li><a href="javascript:;"
							class="tpl-dropdown-content-progress"> <span class="task">
									<span class="desc">Amaze UI 用户中心 v1.2 </span> <span
									class="percent">45%</span>
							</span> <span class="progress">
									<div class="am-progress tpl-progress am-progress-striped">
										<div class="am-progress-bar am-progress-bar-success"
											style="width: 45%"></div>
									</div>
							</span>
						</a></li>
						<li><a href="javascript:;"
							class="tpl-dropdown-content-progress"> <span class="task">
									<span class="desc">新闻内容页 </span> <span class="percent">30%</span>
							</span> <span class="progress">
									<div class="am-progress tpl-progress am-progress-striped">
										<div class="am-progress-bar am-progress-bar-secondary"
											style="width: 30%"></div>
									</div>
							</span>
						</a></li>
						<li><a href="javascript:;"
							class="tpl-dropdown-content-progress"> <span class="task">
									<span class="desc">管理中心 </span> <span class="percent">60%</span>
							</span> <span class="progress">
									<div class="am-progress tpl-progress am-progress-striped">
										<div class="am-progress-bar am-progress-bar-warning"
											style="width: 60%"></div>
									</div>
							</span>
						</a></li>

					</ul>
				</li>
				<li class="am-hide-sm-only"><a href="javascript:;"
					id="admin-fullscreen" class="tpl-header-list-link"><span
						class="am-icon-arrows-alt"></span> <span class="admin-fullText">开启全屏</span></a></li>

				<li class="am-dropdown" data-am-dropdown data-am-dropdown-toggle>
					<a class="am-dropdown-toggle tpl-header-list-link"
					href="javascript:;"> <span class="tpl-header-list-user-nick">禁言小张</span><span
						class="tpl-header-list-user-ico"> <img
							src="<%=path%>/HT/assets/img/user01.png"></span>
				</a>
					<ul class="am-dropdown-content">
						<li><a href="#"><span class="am-icon-bell-o"></span> 资料</a></li>
						<li><a href="#"><span class="am-icon-cog"></span> 设置</a></li>
						<li><a href="#"><span class="am-icon-power-off"></span>
								退出</a></li>
					</ul>
				</li>
				<li><a href="###" class="tpl-header-list-link"><span
						class="am-icon-sign-out tpl-header-list-ico-out-size"></span></a></li>
			</ul>
		</div>
	</header>







	<div class="tpl-page-container tpl-page-header-fixed">


		<div class="tpl-left-nav tpl-left-nav-hover">
			<div class="tpl-left-nav-title">Amaze UI 列表</div>
			<div class="tpl-left-nav-list">
				<ul class="tpl-left-nav-menu">
					<li class="tpl-left-nav-item"><a
						href="<%=path%>/HT/index.html" class="nav-link active"> <i
							class="am-icon-home"></i> <span>首页</span>
					</a></li>
					<li class="tpl-left-nav-item"><a
						href="<%=path%>/HT/chart.html"
						class="nav-link tpl-left-nav-link-list"> <i
							class="am-icon-bar-chart"></i> <span>数据表</span> <i
							class="tpl-left-nav-content tpl-badge-danger"> 12 </i>
					</a></li>

					<li class="tpl-left-nav-item">
						<!-- 打开状态 a 标签添加 active 即可   --> <a href="javascript:;"
						class="nav-link tpl-left-nav-link-list active"> <i
							class="am-icon-table"></i> <span>表格</span> <!-- 列表打开状态的i标签添加 tpl-left-nav-more-ico-rotate 图表即90°旋转  -->
							<i
							class="am-icon-angle-right tpl-left-nav-more-ico am-fr am-margin-right tpl-left-nav-more-ico-rotate"></i>
					</a>
						<ul class="tpl-left-nav-sub-menu" style="display: block">
							<li>
								<!-- 打开状态 a 标签添加 active 即可   --> <a
								href="<%=path%>/HT/table-font-list.html" class="active"> <i
									class="am-icon-angle-right"></i> <span>文字表格</span> <i
									class="am-icon-star tpl-left-nav-content-ico am-fr am-margin-right"></i>
							</a> <a href="<%=path%>/HT/table-images-list.html"> <i
									class="am-icon-angle-right"></i> <span>图片表格</span> <i
									class="tpl-left-nav-content tpl-badge-success"> 18 </i> <a
									href="<%=path%>/HT/form-news.html"> <i
										class="am-icon-angle-right"></i> <span>消息列表</span> <i
										class="tpl-left-nav-content tpl-badge-primary"> 5 </i> <a
										href="<%=path%>/HT/form-news-list.html"> <i
											class="am-icon-angle-right"></i> <span>文字列表</span>

									</a>
							</li>
						</ul>
					</li>

					<li class="tpl-left-nav-item"><a href="javascript:;"
						class="nav-link tpl-left-nav-link-list"> <i
							class="am-icon-wpforms"></i> <span>表单</span> <i
							class="am-icon-angle-right tpl-left-nav-more-ico am-fr am-margin-right"></i>
					</a>
						<ul class="tpl-left-nav-sub-menu">
							<li><a href="<%=path%>/HT/form-amazeui.html"> <i
									class="am-icon-angle-right"></i> <span>Amaze UI 表单</span> <i
									class="am-icon-star tpl-left-nav-content-ico am-fr am-margin-right"></i>
							</a> <a href="<%=path%>/HT/form-line.html"> <i
									class="am-icon-angle-right"></i> <span>线条表单</span>
							</a></li>
						</ul></li>

					<li class="tpl-left-nav-item"><a href="javascript:;"
						class="nav-link tpl-left-nav-link-list"> <i
							class="am-icon-wpforms"></i> <span>用户管理</span> <i
							class="am-icon-angle-right tpl-left-nav-more-ico am-fr am-margin-right tpl-left-nav-more-ico-rotate"></i>
					</a>
						<ul class="tpl-left-nav-sub-menu" style="display: block;">
							<li><a href="<%=path%>/User/QueryAll?page=1"> <i
									class="am-icon-angle-right"></i> <span>用户管理</span> <i
									class="am-icon-star tpl-left-nav-content-ico am-fr am-margin-right"></i>
							</a></li>
						</ul></li>

					<li class="tpl-left-nav-item"><a href="<%=path%>/HT/login.jsp"
						class="nav-link tpl-left-nav-link-list"> <i
							class="am-icon-key"></i> <span>登录</span>

					</a></li>
				</ul>
			</div>
		</div>





		<div class="tpl-content-wrapper">
			<div class="tpl-content-page-title">用户信息管理</div>
			<ol class="am-breadcrumb">
				<li><a href="<%=path%>/HT/index.jsp" class="am-icon-home">首页</a></li>
				<li class="am-active">用户信息管理</li>
			</ol>
			<div class="tpl-portlet-components">
				<div class="portlet-title">
					<div class="caption font-green bold">
						<span class="am-icon-code"></span> 列表
					</div>
					<div class="tpl-portlet-input tpl-fz-ml">
						<div class="portlet-input input-small input-inline">
							<div class="input-icon right">
								<i class="am-icon-search"></i> <input type="text"
									class="form-control form-control-solid" placeholder="搜索...">
							</div>
						</div>
					</div>


				</div>
				<div class="tpl-block">
					<div class="am-g">
						<div class="am-u-sm-12 am-u-md-6">
							<div class="am-btn-toolbar">
								<div class="am-btn-group am-btn-group-xs">
									<a type="button" href="<%=path%>/User/AddUserBefor"
										class="am-btn am-btn-default am-btn-success"> <span
										class="am-icon-plus"></span> 新增
									</a>
								</div>
							</div>
						</div>
						<div class="am-u-sm-12 am-u-md-3">
							<div class="am-form-group">
								<select data-am-selected="{btnSize: 'sm'}" onchange="Select()"
									name="sel" id="sel">
									<option value="#">请选择人员身份</option>
									<option value="<%=path%>/User/SelectRole?roleId=1">超级管理员</option>
									<option value="<%=path%>/User/SelectRole?roleId=2">项目管理员</option>
									<option value="<%=path%>/User/SelectRole?roleId=3">楼栋管理员</option>
									<option value="<%=path%>/User/SelectRole?roleId=4">销售负责人</option>
									<option value="<%=path%>/User/SelectRole?roleId=5">业务员</option>
								</select>
							</div>
						</div>
						<div class="am-u-sm-12 am-u-md-3">
							<div class="am-input-group am-input-group-sm">
								<input type="text" class="am-form-field" name="SouSuo" id="SouSuo"> <span
									class="am-input-group-btn">
									<button onclick="SouSuo()" 
										class="am-btn  am-btn-default am-btn-success tpl-am-btn-success am-icon-search"
										type="button">搜索</button>
								</span>
							</div>
						</div>
					</div>
					<div class="am-g">
						<div class="am-u-sm-12">
							<form class="am-form">
								<table
									class="am-table am-table-striped am-table-hover table-main">
									<thead>
										<tr>
											<th class="table-check"><input type="checkbox"
												class="tpl-table-fz-check"></th>
											<th class="table-id">ID</th>
											<th class="table-title">账户名</th>
											<th class="table-type">账户密码</th>
											<th class="table-author am-hide-sm-only">用户名</th>
											<th class="table-date am-hide-sm-only">用户电话</th>
											<th class="table-date am-hide-sm-only">权限</th>
											<th class="table-date am-hide-sm-only">创建时间</th>
											<th class="table-set">操作</th>
										</tr>
									</thead>
									<tbody>
										<c:forEach items="${list}" var="user">
											<tr>
												<td><input type="checkbox"></td>
												<td>${user.id}</td>
												<td><a href="#">${user.userAccount}</a></td>
												<td>${user.userPassword}</td>
												<td class="am-hide-sm-only">${user.userName}</td>
												<td class="am-hide-sm-only">${user.userMobile}</td>
												<td class="am-hide-sm-only">${user.roleName}</td>
												<td class="am-hide-sm-only">${user.createTime}</td>

												<td>
													<div class="am-btn-toolbar">
														<div class="am-btn-group am-btn-group-xs">
															<a href="<%=path%>/User/QueryById?Id=${user.id}"
																class="am-btn am-btn-default am-btn-xs am-text-secondary">
																<span class="am-icon-pencil-square-o"></span> 编辑
															</a> <a onclick="Really(${user.id})"
																class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only">
																<span class="am-icon-trash-o"></span> 删除
															</a>
														</div>
													</div>
												</td>
											</tr>
										</c:forEach>
									</tbody>
								</table>
								<div class="am-cf">

									<div class="am-fr">
										<ul class="am-pagination tpl-pagination">
											<li><a onclick="judgePage(${page-1},${totals})">«</a></li>
											<c:forEach begin="1" end="${totals}" var="v">
												<li class="am-active"><a
													href="<%=path%>/User/QueryAll?page=${v}">${v}</a></li>
											</c:forEach>
											<li><a onclick="judgePage(${page+1},${totals})">»</a></li>
										</ul>
									</div>
								</div>
								<hr>

							</form>
						</div>

					</div>
				</div>
				<div class="tpl-alert"></div>
			</div>










		</div>

	</div>


	<script src="<%=path%>/HT/assets/js/jquery.min.js"></script>
	<script src="<%=path%>/HT/assets/js/amazeui.min.js"></script>
	<script src="<%=path%>/HT/assets/js/app.js"></script>
</body>

</html>