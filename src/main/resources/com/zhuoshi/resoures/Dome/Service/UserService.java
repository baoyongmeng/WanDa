package zhuoshi.resoures.Dome.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import zhuoshi.resoures.Dome.bean.User;

/**
 *@author BaoYongMeng E-mail: 951793431@qq.com
* @date 创建时间：2017年5月15日 下午4:17:13 
* @version 1.0 
* 与用户相关的数据操作（增删改查。。）
*/
public interface UserService {

	//查询id
	public User QueryById(int id);
	
	public User QueryByAccount(String UserAccount);
	
	//查询全部
	public List<User> QueryAll();
	
	//添加一个用户
	public int AddUser(User user);
	
	//删除一个用户
	public int DeleteUser(int id);
	
	//修改一个用户信息
	public int UpdateUser(User user);
	
	//根据用户的rid查询用户的身份权限
	public String QueryPosition(int user_rid);
}
