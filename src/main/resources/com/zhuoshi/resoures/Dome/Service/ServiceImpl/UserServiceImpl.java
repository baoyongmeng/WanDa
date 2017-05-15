package zhuoshi.resoures.Dome.Service.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import zhuoshi.resoures.Dome.Service.UserService;
import zhuoshi.resoures.Dome.bean.User;
import zhuoshi.resoures.Dome.dao.RoleDao;
import zhuoshi.resoures.Dome.dao.UserDao;

/**
 *@author BaoYongMeng E-mail: 951793431@qq.com
* @date 创建时间：2017年5月15日 下午4:22:42 
* @version 1.0 
*/
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;
	@Autowired
	private RoleDao roleDao;
	
	public User QueryById(int id) {
		// TODO Auto-generated method stub
		return userDao.QueryById(id);
	}

	public List<User> QueryAll() {
		// TODO Auto-generated method stub
		return userDao.QueryAll();
	}

	public int AddUser(User user) {
		// TODO Auto-generated method stub
		return userDao.AddUser(user);
	}

	public int DeleteUser(int id) {
		// TODO Auto-generated method stub
		return userDao.DeleteUser(id);
	}

	public int UpdateUser(User user) {
		// TODO Auto-generated method stub
		return userDao.UpdateUser(user);
	}

	public String QueryPosition(int user_rid) {
		// TODO Auto-generated method stub
		return roleDao.QueryById(user_rid).getRoleName();
	}

}