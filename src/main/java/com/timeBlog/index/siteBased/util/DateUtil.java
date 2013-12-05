package com.timeBlog.index.siteBased.util;

import java.text.ParseException; 
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar; 
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
/**
 * 对日期格式等进行处理
 * 
 * @author jove
 *
 */
public class DateUtil {
  
	private static DateUtil instance;

	public DateUtil() {
		if (instance == null) {
			getInstance();
		}
	}

	public static DateUtil getInstance() {
		return new DateUtil();
	}

	/**
	 * 
	 * @param dataFormat
	 *            "yyyy-MM-dd" "yyyy-MM-dd HH:mm" "yyyy-MM-dd HH:mm:SS" "yyyyMM"
	 *            "yyyy" "MM" "yyyyMMddHHmmssSSS"
	 * @return
	 */
	public static String getSysdateString(String timeFormat) {		
		return getDateString(Calendar.getInstance().getTime(), timeFormat);
	} 
	
	/**
	 *  日期转化为字符串
	 * @param date
	 * @param timeFormat
	 * @return
	 */
	public static String getDateString(Date date, String timeFormat){
		if (timeFormat == null || timeFormat.equals("")) {
			timeFormat = "yyyy-MM-dd";
		}
		SimpleDateFormat timeFormatter = new SimpleDateFormat(timeFormat);
		String sDate = timeFormatter.format(date);
		return sDate;
	}
	
	/**
	 * 将长时间格式字符串转换为时间
	 * 
	 * @param strDate
	 * @param timeFormat
	 * @return
	 */
	public static String strToDateLong(String strDate, String timeFormat, String reTimeFormat) {
		SimpleDateFormat formatter = new SimpleDateFormat(timeFormat); 
		SimpleDateFormat reFormatter = new SimpleDateFormat(reTimeFormat); 
		Date strtodate = new Date() ;
		String dateString = "";
		try {
			strtodate = formatter.parse(strDate);
			dateString = reFormatter.format(strtodate);
		} catch (ParseException e) { 
			e.printStackTrace();
		} catch (Exception e) { 
			e.printStackTrace();
		}
		return dateString;
	}

	/**
	 * Date to String
	 * 
	 * @param d
	 * @param formatPattern
	 * @return
	 */
	public static String formatDate(Date d, String formatPattern) {
		if (d == null) {
			return "";
		}
		SimpleDateFormat timeFormatter = new SimpleDateFormat(formatPattern);
		String sDate = timeFormatter.format(d);
		return sDate;
	}

	/**
	 * 
	 * @param dateStr
	 * @return
	 */
	public static GregorianCalendar ParseGregorianCalendar(String dateStr) {
		GregorianCalendar gregorianCalendar = new GregorianCalendar();
		gregorianCalendar.clear();
		if (dateStr != null) {
			if (dateStr.length() == 10) {
				// yyyy-MM-dd
				gregorianCalendar.set(
						Integer.parseInt(dateStr.substring(0, 4)),
						Integer.parseInt(dateStr.substring(5, 7)) - 1,
						Integer.parseInt(dateStr.substring(8, 10)), 0, 0, 0);
			} else if (dateStr.length() == 13) {
				// yyyy-MM-dd hh
				gregorianCalendar.set(
						Integer.parseInt(dateStr.substring(0, 4)),
						Integer.parseInt(dateStr.substring(5, 7)) - 1,
						Integer.parseInt(dateStr.substring(8, 10)),
						Integer.parseInt(dateStr.substring(11, 13)), 0, 0);
			} else if (dateStr.length() == 16) {
				// yyyy-MM-dd hh:mm
				gregorianCalendar.set(
						Integer.parseInt(dateStr.substring(0, 4)),
						Integer.parseInt(dateStr.substring(5, 7)) - 1,
						Integer.parseInt(dateStr.substring(8, 10)),
						Integer.parseInt(dateStr.substring(11, 13)),
						Integer.parseInt(dateStr.substring(14, 16)), 0);
			} else if (dateStr.length() >= 19) {
				// yyyy-MM-dd hh:mm:ss
				gregorianCalendar.set(
				Integer.parseInt(dateStr.substring(0, 4)),
				Integer.parseInt(dateStr.substring(5, 7)) - 1,
				Integer.parseInt(dateStr.substring(8, 10)),
				Integer.parseInt(dateStr.substring(11, 13)),
				Integer.parseInt(dateStr.substring(14, 16)),
				Integer.parseInt(dateStr.substring(17, 19)));
			}
		}
		return gregorianCalendar;
	}


}