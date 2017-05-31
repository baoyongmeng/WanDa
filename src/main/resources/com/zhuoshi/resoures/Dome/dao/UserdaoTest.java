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

	
	@Test
	public void testSelectById() {
		
		User user =new User();
		
		user.setRoleId(1);
		
		List<User> list = userDao.ManyConditionsQuery(user);
			for (User user2 : list) {
				System.err.println(user2);
			}
	}
}
