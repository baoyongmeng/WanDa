package zhuoshi.resoures.Dome.dao;

import java.util.List;

import zhuoshi.resoures.Dome.bean.Role;

/**
 *@author BaoYongMeng E-mail: 951793431@qq.com
* @date 创建时间：2017年5月15日 上午11:14:44 
* @version 1.0 
* 用于按照用户的RoleId来查询role表中查询对应id的权限身份
*/
public interface RoleDao {

	//根据id查询身份
	public Role QueryById(int id);
	
	//查询全部
	public List<Role> QueryAll();
}
