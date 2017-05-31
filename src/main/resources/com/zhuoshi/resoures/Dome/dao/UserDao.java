package zhuoshi.resoures.Dome.dao;

import java.util.List;

import zhuoshi.resoures.Dome.bean.User;

/**
 *@author BaoYongMeng E-mail: 951793431@qq.com
* @date 创建时间：2017年5月14日 上午11:01:21 
* @version 1.0 
* 用于对user表的增删改查
*/
public interface UserDao {
	
	//按照姓名查询用户
	public User QueryByUserAccount();
	
	//查询全部的用户
	public List<User> QueryAll();

	//按Id查询
	public User QueryById(int id);

	//添加用户
	public int AddUser(User user);
	
	//按照id删除
	public int DeleteUser(int id);
	
	//按用户名查找
	public User QueryByAccount(String UserAccount);
	
	//修改user
	public int UpdateUser(User user);
	
	//分页查询      spacing 起点的位置
	public List<User> LimitQueryAll(int spacing);
	
	//查询共计多少数据
	public int QueryAllCount();
	
	//多条件查询
	public List<User> ManyConditionsQuery(User user);	
	
}
