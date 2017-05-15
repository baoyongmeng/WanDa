package zhuoshi.resoures.Dome.bean;
/**
 *@author BaoYongMeng E-mail: 951793431@qq.com
* @date 创建时间：2017年5月14日 上午10:56:21 
* @version 1.0 
* 权限类   表示权限
*/
public class Role {

	//id
	private int Id;
	//权限名称
	private String RoleName;
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getRoleName() {
		return RoleName;
	}
	public void setRoleName(String roleName) {
		RoleName = roleName;
	}
	@Override
	public String toString() {
		return "Role [Id=" + Id + ", RoleName=" + RoleName + "]";
	}
	
}
