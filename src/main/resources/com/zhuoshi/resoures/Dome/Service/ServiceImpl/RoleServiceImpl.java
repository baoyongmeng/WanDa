package zhuoshi.resoures.Dome.Service.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import zhuoshi.resoures.Dome.Service.RoleService;
import zhuoshi.resoures.Dome.bean.Role;
import zhuoshi.resoures.Dome.dao.RoleDao;

/**
 *@author BaoYongMeng E-mail: 951793431@qq.com
* @date 创建时间：2017年5月16日 上午9:25:03 
* @version 1.0 
*/
@Service
public class RoleServiceImpl implements RoleService {

	@Autowired
	private RoleDao roleDao;
	
	public Role QueryById(int id) {
		// TODO Auto-generated method stub
		return roleDao.QueryById(id);
	}

	public List<Role> QueryAll() {
		// TODO Auto-generated method stub
		return roleDao.QueryAll();
	}

}
