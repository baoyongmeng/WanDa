package zhuoshi.resoures.Dome.Util;

import org.junit.Test;
import org.springframework.stereotype.Component;

/**
 * 工具类 里面多是要用到的各种单个的方法
 * @author BaoYongMeng E-mail: 951793431@qq.com
 * @date 创建时间：2017年5月30日 下午1:46:50
 * @version 1.0
 */
@Component
public class Utils {

	/**
	 * 判断第一个字符是否是数字
	 * @param count : 传入的字符串
	 * @return 返回一个布尔值 是数字串为true 不是为false
	 */
	public boolean IFCount(String count) {

		boolean fal = false;

		int i = (int) count.charAt(0);

		System.err.println(i);

		if (i >= 48 && i <= 57) {
			fal = true;
		}

		return fal;
	}
	/**
	 * 判断第一个字符是否是字母
	 * @param str : 传入的字符串
	 * @return 返回一个布尔值 是字符串为true 不是为false
	 */
	public boolean IFChar(String str) {

		boolean fal = false;

		int i = (int) str.charAt(0);

		System.err.println(i);

		if ((i >= 65 && i <= 95)||(i >= 97 && i <= 122)) {
			fal = true;
		}
		return fal;
	}

	/*@Test
	public void test() {
		if (IFChar("A23")) {
			System.err.println("这货是字幕");
		} else {
			System.err.println("这货不是字幕");
		}

	}*/
}
