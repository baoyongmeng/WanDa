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
public class daoTest {

	/**
	 * org.apache.ibatis.binding.BindingException: Invalid bound statement (not found): com.zhuoshi.Test.dao.Studao.SelectAll
	 * */
	
	@Resource
	private UserDao userDao;
	@Test
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
public void testSelectById() {
	
		/*if(userDao.DeleteUser(3)>1){
			System.err.println("shancanashdasjk klsjdklasjdl k****************");
		}*/
		User user = new User();
		user.setId(1);
		user.setUserAccount("admin");
		
		int i =userDao.UpdateUser(user);
		if (i>0) {
			System.err.println("更新成功！！！！！！！！！！");
		}
	}
}
