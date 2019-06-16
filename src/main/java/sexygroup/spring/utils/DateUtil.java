package sexygroup.spring.utils;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class DateUtil {

    /**
     * 获取与当前日期相差：relYear年，relMonth月，relDay日的日期,返回格式:yyyy-MM-dd
     *
     * @param relYear
     * @param relMonth
     * @param relDay
     * @return
     */
    public static String getRelativeDate(int relYear, int relMonth, int relDay) {

        //日期格式
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        //获取当前日期
        Date now = new Date();
        //获取七天前日期
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(now);
        calendar.add(Calendar.YEAR, relYear);
        calendar.add(Calendar.MONTH, relMonth);
        calendar.add(Calendar.DATE, relDay);

        return dateFormat.format(calendar.getTime());
    }

    /**
     * 获取两个相对日期
     *
     * @param relYear1
     * @param relMonth1
     * @param relDay1
     * @param relYear2
     * @param relMonth2
     * @param relDay2
     * @return
     */
    public static String[] getRelativeDateRange(int relYear1, int relMonth1, int relDay1, int relYear2, int relMonth2, int relDay2) {
        String[] dateRange = new String[2];
        dateRange[0] = getRelativeDate(relYear1, relMonth1, relDay1);
        dateRange[1] = getRelativeDate(relYear2, relMonth2, relDay2);
        return dateRange;
    }

}
