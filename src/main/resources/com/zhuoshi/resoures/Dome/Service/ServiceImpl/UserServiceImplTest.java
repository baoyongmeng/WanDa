package zhuoshi.resoures.Dome.Service.ServiceImpl;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import zhuoshi.resoures.Dome.Service.UserService;
import zhuoshi.resoures.Dome.bean.User;
import zhuoshi.resoures.Dome.dao.RoleDao;
import zhuoshi.resoures.Dome.dao.UserDao;

/**
 *@author BaoYongMeng E-mail: 951793431@qq.com
* @date 创建时间：2017年5月15日 下午4:31:03 
* @version 1.0 
* userservic 测试类
*/
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:com/zhuoshi/resoures/spring/spring-dao.xml",
						"classpath:com/zhuoshi/resoures/spring/spring-service.xml",
						"classpath:com/zhuoshi/resoures/spring/spring-Component.xml"})


public class UserServiceImplTest {

	@Autowired
	private UserService userService;
	@Autowired
	private RoleDao roleDao;
	@Autowired
	private User user;
	@Test
	public void testQueryById() {
		System.err.println(userService.QueryById(1));
		
	}

	@Test
	public void testQueryAll() {
		System.err.println(userService.QueryAll());
		
	}

	/**
	 *此处遇见一个数据库乱码问题   解决方法 将数据库安装目录下的my.ini 文件 用editplus打开  然后按下Ctrl+F 
	 *查找 latin1 将其全部替换为utf-8 
	 *另外
	 *【1】在[client]节点下添加 （这个如果是另一种character_set_server=utf8 这样写我的会报错1067【mysql服务无法启动】，大家可以试试)  （这个是客户端的编码配置）
       	default-character-set=utf8 
     	【2】在[mysqld]节点下添加 （这个是服务器端编码的配置）（注：collation是排序方式）
       	character-set-server=utf8 
      	collation-server=utf8_general_ci 
	 */
	@Test
	public void testAddUser() {
		user.setUserAccount("123");
		user.setUserPassword("123");
		user.setUserName("李四");
		user.setUserMobile("01234567899");
		user.setRoleId(3);
		if (userService.AddUser(user)>0) {
			System.err.println("添加成功");
		}
	}

	@Test
	public void testDeleteUser() {
		if (userService.DeleteUser(2)>0) {
			System.err.println("成功干掉");
		}
	}

	@Test
	public void testUpdateUser() {
		user.setId(3);
		user.setUserName("孙呵呵");
		if (userService.UpdateUser(user)>0) {
			System.err.println("修改成功");
		}
	}

	@Test
	public void testQueryPosition() {
		System.err.println(userService.QueryPosition(userService.QueryById(3).getRoleId()));
		
	}

	@Test
	public void testQueryByAccount() {
		System.err.println(userService.QueryByAccount("admin"));
		
	}
}
