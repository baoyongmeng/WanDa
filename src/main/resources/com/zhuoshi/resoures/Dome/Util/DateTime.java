package zhuoshi.resoures.Dome.Util;

import java.util.Date;

import org.springframework.stereotype.Component;

/**
 * 返回系统当前时间的工具类
 *@author BaoYongMeng E-mail: 951793431@qq.com
* @date 创建时间：2017年5月24日 下午5:42:37 
* @version 1.0 
*/
@Component
public class DateTime {

	public String getTime() {
		
		Date date = new Date();
		String time = "";
		int yy=date.getYear()+1900;
		int mm=date.getMonth()+1;
		int dd = date.getDate();
		int hh=date.getHours();
		int ff=date.getMinutes();
		int ss = date.getSeconds();
		time = yy+"/"+mm+"/"+dd+" "+hh+"/"+ff+"/"+ss;
		//System.err.println(time);
		//2000/11/09 18/15/42
		return time;
	}
}
