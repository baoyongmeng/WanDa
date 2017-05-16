package zhuoshi.resoures.Dome.dao;

import java.util.List;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.stereotype.Controller;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import zhuoshi.resoures.Dome.bean.User;



@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:com/zhuoshi/resoures/spring/spring-dao.xml")
public class UserdaoTest {

	/**
	 * org.apache.ibatis.binding.BindingException: Invalid bound statement (not found): com.zhuoshi.Test.dao.Studao.SelectAll
	 * */
	
	@Resource
	private UserDao userDao;

	/*public void testSelectAll() {
		List<User>users = userDao.QueryAll();
		for (User user : users) {
			System.out.println(user);
		}
	public void testSelectById() {
		User users = userDao.QueryById(1);
		
			System.out.println(users);
		
	}
	public void testSelectById() {
		
		User user = new User();
		user.setUserAccount("root");
		user.setUserPassword("root");
		user.setUserName("admin");
		user.setUserMobile("01234567890");
		user.setRoleId(1);
		if(userDao.AddUser(user)>1){
			System.out.println("添加成功");
		}
		
	}*/
	@Test
	public void testSelectById() {
		
		
		System.err.println(userDao.QueryByAccount("admin"));
	}
}
