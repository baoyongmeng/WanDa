package zhuoshi.resoures.Dome.dao;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import zhuoshi.resoures.Dome.bean.Role;

/**
 *@author BaoYongMeng E-mail: 951793431@qq.com
* @date 创建时间：2017年5月15日 上午11:26:28 
* @version 1.0 
*/
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:com/zhuoshi/resoures/spring/spring-dao.xml")
public class RoleDaoTest {

	@Autowired
	private RoleDao roleDao;
	@Autowired
	private UserDao userDao;
	@Test
	public void testQueryById() {
		Role role = roleDao.QueryById(userDao.QueryById(1).getRoleId());
		System.err.println("---------------------------"+role);
	}

	@Test
	public void testQueryAll() {
		List<Role> roles = roleDao.QueryAll();
		for (Role role : roles) {
			System.err.println(role);
		}
	}

}
