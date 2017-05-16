package zhuoshi.resoures.Dome.Service.ServiceImpl;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import zhuoshi.resoures.Dome.Service.RoleService;

/**
 *@author BaoYongMeng E-mail: 951793431@qq.com
* @date 创建时间：2017年5月16日 上午9:27:30 
* @version 1.0 
*/
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:com/zhuoshi/resoures/spring/spring-dao.xml",
						"classpath:com/zhuoshi/resoures/spring/spring-service.xml",
						"classpath:com/zhuoshi/resoures/spring/spring-Component.xml"})


public class RoleServiceTest {
	
	@Autowired
	private RoleService roleService;

	@Test
	public void testQueryById() {
		System.err.println(roleService.QueryById(2));
	}

	@Test
	public void testQueryAll() {
		System.err.println(roleService.QueryAll());
	}

}
