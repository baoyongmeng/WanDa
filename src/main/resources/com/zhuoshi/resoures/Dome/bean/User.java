package zhuoshi.resoures.Dome.bean;

import java.util.Date;

import org.springframework.stereotype.Component;


/**
 *@author BaoYongMeng E-mail: 951793431@qq.com
* @date 创建时间：2017年5月14日 上午10:49:43 
* @version 1.0 
* User类 用于用户登录
*/
@Component
public class User {
	
	//Id
	private int Id;
	//账号名称
	private String UserAccount;
	//账号密码
	private String UserPassword;
	//用户名称
	private String UserName;
	//创建时间
	private Date CreateTime;
	//用户电话
	private String UserMobile;
	//权限id
	private int RoleId;
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getUserAccount() {
		return UserAccount;
	}
	public void setUserAccount(String userAccount) {
		UserAccount = userAccount;
	}
	public String getUserPassword() {
		return UserPassword;
	}
	public void setUserPassword(String userPassword) {
		UserPassword = userPassword;
	}
	public String getUserName() {
		return UserName;
	}
	public void setUserName(String userName) {
		UserName = userName;
	}
	public String getUserMobile() {
		return UserMobile;
	}
	public void setUserMobile(String userMobile) {
		UserMobile = userMobile;
	}
	public int getRoleId() {
		return RoleId;
	}
	public void setRoleId(int roleId) {
		RoleId = roleId;
	}
	public Date getCreateTime() {
		return CreateTime;
	}
	public void setCreateTime(Date createTime) {
		CreateTime = createTime;
	}
	@Override
	public String toString() {
		return "User [Id=" + Id + ", UserAccount=" + UserAccount + ", UserPassword=" + UserPassword + ", UserName="
				+ UserName + ", CreateTime=" + CreateTime + ", UserMobile=" + UserMobile + ", RoleId=" + RoleId + "]";
	}
	
	
}
