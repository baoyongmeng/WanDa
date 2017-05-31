package zhuoshi.resoures.Dome.Controller;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.annotations.Param;
import org.apache.tomcat.util.log.UserDataHelper.Mode;
import org.junit.FixMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import zhuoshi.resoures.Dome.Service.RoleService;
import zhuoshi.resoures.Dome.Service.UserService;
import zhuoshi.resoures.Dome.Util.DateTime;
import zhuoshi.resoures.Dome.Util.EncodingTool;
import zhuoshi.resoures.Dome.Util.UserUtil;
import zhuoshi.resoures.Dome.Util.Utils;
import zhuoshi.resoures.Dome.bean.Role;
import zhuoshi.resoures.Dome.bean.User;

/**
 * @author BaoYongMeng E-mail: 951793431@qq.com
 * @date 创建时间：2017年5月16日 上午9:45:06
 * @version 1.0
 */
@Controller
@RequestMapping("/User")
public class UserController {

	@Autowired
	private UserService userService;
	@Autowired
	private User user;
	@Autowired
	private RoleService roleService;
	@Autowired
	private UserUtil userUtil;
	@Autowired
	private DateTime dateTime;
	@Autowired
	private Utils utils;
	@Autowired
	private EncodingTool encoding;

	/**
	 * 这里是用来返回首页的 为了这个系统的安全性，以及健壮性，所以不能在地址栏显示上一个页面的地址什么的，有上一个页面的返回值来重定向或者转发
	 * 
	 * @return
	 */
	@RequestMapping(value = "Index")
	public String Index() {

		return "index";
	}

	/**
	 * 
	 * @param model
	 * @param request
	 * @param response
	 * @return 返回成功或者失败的页面名称 注意：这里有个权限验证没有走，由于不清楚各个权限都用来做什么 所以暂时不做
	 */
	@RequestMapping(value = "Login", method = { RequestMethod.POST, RequestMethod.POST })
	public String Login(Model model, HttpServletRequest request, HttpServletResponse response) {

		String User_Account = request.getParameter("UserAccount");
		String User_Password = request.getParameter("UserPassword");

		// 登录成功或者失败后的返回地址
		String LoginURL = "";
		// 按id查询用户
		if (User_Account != null && User_Account != "") {
			user = userService.QueryByAccount(User_Account);

			// 判断用户名是否有效
			if (user.getUserAccount() != null && user.getUserAccount() != "") {
				// 判断登录
				if (user.getUserAccount().equals(User_Account) && user.getUserPassword().equals(User_Password)) {
					// 登录成功 定向首页 并将user信息携带到首页
					// System.err.println(user.getUserName()+"<-------------------------------超级华丽输出线-------------------------------->");
					model.addAttribute("user", user);
					LoginURL = "forward:Index";
				} else {
					// 登录失败，返回登录页面
					LoginURL = "login";
				}
			} else {
				// 登录失败，返回登录页面
				LoginURL = "login";
			}
		} else {
			// 登录失败，返回登录页面
			LoginURL = "login";
		}

		return LoginURL;
	}

	/**
	 * 查询全部 向前台返回一个分页的 userUtils
	 * @param model
	 * @param page
	 * @return
	 */
	@RequestMapping(value = "QueryAll")
	public String QueryAll(Model model, @RequestParam(value = "page") Integer page) {

		// 查询总共有多少数据
		int total = userService.QueryAllCount();
		// 第几页
		int totals = total / 10 + 1;
//		System.err.println(total + "------------------------------------------");
		model.addAttribute("totals", totals);

		// 当前页数

		int pagecount = page - 1;

		model.addAttribute("page", page);
		List<UserUtil> userUtils = new ArrayList<UserUtil>();

		List<User> users = userService.LimiQueryAll(pagecount * 10);
		// 这里引入一个工具类，为了将用户的身份名称显示出来
		// 这个工具了与User类相同，不同的是roleid->rolename
		for (User user1 : users) {
			userUtil = new UserUtil();
			userUtil.setId(user1.getId());
			userUtil.setUserAccount(user1.getUserAccount());
			userUtil.setUserPassword(user1.getUserPassword());
			userUtil.setUserName(user1.getUserName());
			userUtil.setUserMobile(user1.getUserMobile());
			userUtil.setCreateTime(user1.getCreateTime());
			userUtil.setRoleName(roleService.QueryById(user1.getRoleId()).getRoleName());
			userUtils.add(userUtil);
		}
		model.addAttribute("list", userUtils);
		return "AdminUser";
	}

	/**
	 * 删除用户
	 * 
	 * @param Id
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "DeleteUser")
	public String DeleteUser(@RequestParam(value = "Id") Integer Id, Model model) {

		// 删除成功与否，所返回的地址
		String ReturnURL = "";
		// 删除成功与否的标记（1为删除成功，0为删除失败）
		String fla = "";
		System.err.println(
				Id + "********************************************************************************************");

		if (userService.DeleteUser(Id) > 0) {
			ReturnURL = "redirect:QueryAll?page=1";
			fla = "1";
		} else {
			fla = "0";
		}
		model.addAttribute("fla", fla);
		return ReturnURL;
	}

	/**
	 * 查询单个（按照id查询）
	 * 
	 * @param Id
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "QueryById")
	public String QueryById(@RequestParam(value = "Id") Integer Id, Model model) {
		// 页面需求需要查询出所有的权限名称
		List<Role> roles = roleService.QueryAll();
		model.addAttribute("roleList", roles);

		User user = userService.QueryById(Id);
		model.addAttribute("user", user);
		return "EidUser";
	}

	/**
	 * 取出前台填写的修改内容，在后台修改，并返回页面
	 * 
	 * @param model
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value = "UpdateUser", method = { RequestMethod.POST, RequestMethod.POST })
	public String UpdateUser(Model model, HttpServletRequest request, HttpServletResponse response) {

		// 这是响应和请求的编码
		try {
			request.setCharacterEncoding("utf8");
			response.setCharacterEncoding("utf8");
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		// 响应的URL地址
		String ReturnURL = "";

		String id = request.getParameter("Id");
		String userAccount = request.getParameter("UserAccount");
		String userPassword = request.getParameter("UserPassword");
		String userName = request.getParameter("UserName");
		String userMobile = request.getParameter("UserMobile");
		String createTime = request.getParameter("CreateTime");
		String roleId = request.getParameter("RoleId");

		user.setId(Integer.parseInt(id));
		user.setUserAccount(userAccount);
		user.setUserPassword(userPassword);
		user.setUserName(userName);
		user.setUserMobile(userMobile);
		// user.setCreateTime(createTime);
		user.setRoleId(Integer.parseInt(roleId));
		user.setCreateTime(null);
		System.err.println(
				userService + "<-----------------UPDATE--------------超级华丽输出线-------------------------------->");
		System.err.println(user);
		if (userService.UpdateUser(user) > 0) {
			ReturnURL = "redirect:QueryAll?page=1";
		} else {
			// 这里应该跳转一个错误页面
			System.err.println("修改失败！！！");
			ReturnURL = "forward:QueryById";
			
		}
		return ReturnURL;
	}

	/**
	 * 这里是一个用户添加控制层 主要功能为添加一个用户
	 * 
	 * @param model
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping("AddUser")
	public String AddUser(Model model, HttpServletRequest request, HttpServletResponse response) {

		// 这是响应和请求的编码

		try {
			request.setCharacterEncoding("utf8");
			response.setCharacterEncoding("utf8");
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		// 响应的URL地址
		String ReturnURL = "";

		String userAccount = request.getParameter("UserAccount");
		String userPassword = request.getParameter("UserPassword");
		String userName = request.getParameter("UserName");
		String userMobile = request.getParameter("UserMobile");
		String roleId = request.getParameter("RoleId");
		
		user.setUserAccount(userAccount);
		user.setUserPassword(userPassword);
		user.setUserName(userName);
		user.setUserMobile(userMobile);
		// user.setCreateTime(createTime);
		user.setRoleId(Integer.parseInt(roleId));
		user.setCreateTime(dateTime.getTime());

		if (userAccount != null && userAccount != "" && userPassword != null && userPassword != "" && userName != null
				&& userName != "" && userMobile != null && userMobile != "") {

			
			if (userService.AddUser(user) > 0) {
				System.err.println("<-----------------UPDATE--------------超级华丽输出线-------------------------------->");
				ReturnURL = "redirect:QueryAll?page=1";
			} else {
				System.err.println("添加失败！！！");
				ReturnURL = "AddUser";
			}

		}

		return ReturnURL;
	}
	/**
	 * 按照用户的权限名查询
	 * @param roleId :权限的id
	 * @param model
	 * @return
	 */

	@RequestMapping("SelectRole")
	public String SelectRole(@RequestParam(value = "roleId") Integer roleId, Model model) {
		
		user = new User();
		user.setRoleId(roleId);
		
		
		List<User> users = userService.ManyConditionsQuery(user);
		List<UserUtil> userUtils = new ArrayList<UserUtil>();
		for (User user1 : users) {
			userUtil = new UserUtil();
			userUtil.setId(user1.getId());
			userUtil.setUserAccount(user1.getUserAccount());
			userUtil.setUserPassword(user1.getUserPassword());
			userUtil.setUserName(user1.getUserName());
			userUtil.setUserMobile(user1.getUserMobile());
			userUtil.setCreateTime(user1.getCreateTime());
			userUtil.setRoleName(roleService.QueryById(user1.getRoleId()).getRoleName());
			userUtils.add(userUtil);
		}
		model.addAttribute("list", userUtils);
		model.addAttribute("page", 1);
		model.addAttribute("total", 1);		
		
		return "AdminUser";
	}
	/**
	 * 类似多条件模糊查询，但是略微有点不同   （前台不管输入的值是什么查询字段，到后台去调用工具类，自己判断前台输入的值是什么字段）
	 * @param str ：前台传进来的字符串 需要判断  它是什么字段
	 * @param model
	 * @return
	 */
	@RequestMapping("QueryByAConditions")
public String QueryByAConditions(@RequestParam(value = "str") String str, Model model) {
		str = encoding.encodeStr(str);
		
		System.err.println(str+"<-----------------UPDATE--------------超级华丽输出线-------------------------------->");
		
		
		user = new User();//初始化user的值，因为是spring初始化的bean 所以为了不被其他处使用的bean影响这里的值，需要清空这个user里面的值
		//IFChar（str 这里传进的字符串） 这个方法用来判断第一个字符是否字母
		if (utils.IFChar(str)) {
			
			user.setUserAccount(str);
			//判断第一个字符是否是数字
		}else if (utils.IFCount(str)) {
			user.setUserMobile(str);
			//其余为汉字或其他，即为用户名
		}else {
			user.setUserName(str);
		}
		//调用模糊查询的方法，返回值有可能为多条数据，所以为list
		List<User> users = userService.ManyConditionsQuery(user);
		List<UserUtil> userUtils = new ArrayList<UserUtil>();
		for (User user1 : users) {
			userUtil = new UserUtil();
			userUtil.setId(user1.getId());
			userUtil.setUserAccount(user1.getUserAccount());
			userUtil.setUserPassword(user1.getUserPassword());
			userUtil.setUserName(user1.getUserName());
			userUtil.setUserMobile(user1.getUserMobile());
			userUtil.setCreateTime(user1.getCreateTime());
			userUtil.setRoleName(roleService.QueryById(user1.getRoleId()).getRoleName());
			userUtils.add(userUtil);
		}
		model.addAttribute("list", userUtils);
		model.addAttribute("page", 1);
		model.addAttribute("total", 1);		
		
		
		return "AdminUser";
	}
	
	@RequestMapping("AddUserBefor")
	private String AddUserBefor(Model model) {
		List<Role> roles = roleService.QueryAll();
		model.addAttribute("roleList", roles);
		return "AddUser";
	}
}
