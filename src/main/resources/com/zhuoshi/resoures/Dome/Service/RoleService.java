package zhuoshi.resoures.Dome.Service;

import java.util.List;

import zhuoshi.resoures.Dome.bean.Role;

/**
 *@author BaoYongMeng E-mail: 951793431@qq.com
* @date 创建时间：2017年5月16日 上午9:22:14 
* @version 1.0 
* 来实现roledao 中方法的逻辑层
*/
public interface RoleService {

		//根据id查询身份
		public Role QueryById(int id);
		
		//查询全部
		public List<Role> QueryAll();
}
