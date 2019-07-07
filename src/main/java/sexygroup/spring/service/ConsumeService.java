package sexygroup.spring.service;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import sexygroup.spring.common.service.BaseService;
import sexygroup.spring.pojo.Consume;

import java.util.List;

public interface ConsumeService extends BaseService<Consume> {

    List<JSONObject> findAllDetail();

    //通过消费信息查
    JSONObject findByConsumeId(Integer id);

    List<JSONObject> findByDateBetween(String startTime, String endTime);

    //通过员工信息查
    List<JSONObject> findByStaffId(Integer id);

    List<JSONObject> findByStaffName(String name);

    //通过卡信息查
    List<JSONObject> findByCardId(Integer id);

    List<JSONObject> findByCardReferrer(Integer id);

    //通过客户信息查
    List<JSONObject> findByClientId(Integer id);

    List<JSONObject> findByClientName(String name);

    List<JSONObject> findByClientPhone(String phone);

    List<JSONObject> findByClientGender(String gender);

    List<JSONObject> findByClientAge(String age);

    //通过服务信息查
    List<JSONObject> findByServiceId(Integer id);

    List<JSONObject> findByServiceName(String name);

    //撤销消费
    Integer cancelConsume(Integer consumeId);

    //保存消费列表
    Boolean saveConsumeList(Integer cardId, Integer clientId, Integer staffId, Double totalDeduct, JSONArray serviceList);

    //按天统计
    List<JSONObject> findAllDaily();

    JSONObject findByDay(String day);

    //按周统计
    List<JSONObject> findAllWeekly();

    JSONObject findByWeek(String week);

    //按月统计
    List<JSONObject> findAllMonthly();

    JSONObject findByMonth(String month);

    //按天 分年龄段统计
    //时间段
    List<JSONObject> findAgeByDayBetween(String startDate, String endDate);

    //按天统计
    JSONObject findAgeByDay(String day);
}
