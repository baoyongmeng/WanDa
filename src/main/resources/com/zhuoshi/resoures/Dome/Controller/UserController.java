package zhuoshi.resoures.Dome.Controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.annotations.Param;
import org.junit.FixMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import zhuoshi.resoures.Dome.Service.UserService;
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

	
	/**
	 * 这里是用来返回首页的
	 * 为了这个系统的安全性，以及健壮性，所以不能在地址栏显示上一个页面的地址什么的，有上一个页面的返回值来重定向或者转发
	 * @return
	 */
	@RequestMapping(value="Index")
	public String Index(){
			
		return "index";
	}
	
	/**
	 * 
	 * @param model
	 * @param request
	 * @param response
	 * @return 返回成功或者失败的页面名称
	 * 注意：这里有个权限验证没有走，由于不清楚各个权限都用来做什么  所以暂时不做
	 */
	@RequestMapping(value="Login" , method={RequestMethod.POST,RequestMethod.POST})
	public String Login( Model model,HttpServletRequest request,HttpServletResponse response) {
		
		String User_Account = request.getParameter("UserAccount");
		String User_Password = request.getParameter("UserPassword");

		// 登录成功或者失败后的返回地址
		String LoginURL = "";
		// 按id查询用户
		user = userService.QueryByAccount(User_Account);
		// 判断用户名是否有效
		if (user.getUserAccount() != null && user.getUserAccount() != "") {
			// 判断登录
			if (user.getUserAccount().equals(User_Account) && user.getUserPassword().equals(User_Password)) {
				// 登录成功 定向首页 并将user信息携带到首页
				//System.err.println(user.getUserName()+"<-------------------------------超级华丽输出线-------------------------------->");
				model.addAttribute("user", user);
				LoginURL = "forward:Index";
			} else {
				// 登录失败，返回登录页面
				LoginURL = "login";
			}
		}

		return LoginURL;
	}
	/**
	 * 查询全部 并且向前台返回一个userList
	 * @param model
	 * @return
	 */
	@RequestMapping(value="QueryAll")
	public String QueryAll(Model model) {
		
		List<User> users = userService.QueryAll();
		model.addAttribute("list", users);
		return "AdminUser";
	}
	/**
	 * 删除用户
	 * @param Id
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "DeleteUser")
	public String DeleteUser(@RequestParam(value="Id")Integer Id,Model model) {
		
		//删除成功与否，所返回的地址
		String ReturnURL="";
		//删除成功与否的标记（1为删除成功，0为删除失败）
		String fla="";
		System.err.println(Id+"********************************************************************************************");
		System.err.println(userService+"<-------------------------------超级华丽输出线-------------------------------->");
		if(userService.DeleteUser(Id)>0)
		{
			ReturnURL = "redirect:QueryAll";
			fla = "1";
		}
		else {
			fla="0";
		}
		model.addAttribute("fla", fla);
		return ReturnURL;
	}
	/**
	 * 查询单个（按照id查询）
	 * @param Id
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "QueryById")
	public String QueryById(@RequestParam(value="Id")Integer Id,Model model) {
		
		User user = userService.QueryById(Id);
		model.addAttribute("user", user);
		return "EidUser";
	}
}
