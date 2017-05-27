package zhuoshi.resoures.Dome.dao;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.stereotype.Controller;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.mysql.fabric.xmlrpc.base.Data;

import zhuoshi.resoures.Dome.Util.DateTime;
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
		
	}*/
	@Test
	public void testSelectById() {
		
		User user = new User();
		DateTime dateTime = new DateTime();
		user.setUserAccount("zzz");
		user.setUserPassword("sadaaa");
		user.setUserName("admin");
		user.setUserMobile("01234567890");
		String aString =dateTime.getTime();
		System.err.println(aString);

		//				   "2000/11/09 18/15/42"
		//					2017/5/24 18/30/6
		user.setCreateTime(dateTime.getTime());
		user.setRoleId(1);
		if(userDao.AddUser(user)>0){
			System.out.println("添加成功");
		}
		System.err.println("--------------------");
			
		
	}
	
	/*public void testSelectById() {
		
		
		System.err.println(userDao.QueryByAccount("admin"));
	}*/
}
