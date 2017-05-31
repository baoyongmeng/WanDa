package zhuoshi.resoures.Dome.Util;

import java.io.UnsupportedEncodingException;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestParam;

/**解决@RequestParam 取出中文参数时乱码的问题
 * @author BaoYongMeng E-mail: 951793431@qq.com
 * @date 创建时间：2017年5月31日 下午2:51:23
 * @version 1.0
 */
@Component
public class EncodingTool {
	public static String encodeStr(String str) {
		try {
			return new String(str.getBytes("ISO-8859-1"), "UTF-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
			return null;
		}
	}
}