package zhuoshi.resoures.Dome.Controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.annotations.Param;
import org.eclipse.jdt.internal.compiler.env.IGenericField;
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
				model.addAttribute("user", user);
				LoginURL = "index";
			} else {
				// 登录失败，返回登录页面
				LoginURL = "login";
			}
		}

		return LoginURL;
	}
}
