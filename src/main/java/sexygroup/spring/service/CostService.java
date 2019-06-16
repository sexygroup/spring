package sexygroup.spring.service;

import com.alibaba.fastjson.JSONObject;
import sexygroup.spring.common.service.BaseService;
import sexygroup.spring.pojo.Cost;

import java.util.List;

public interface CostService extends BaseService<Cost> {
    JSONObject findByDateEquals(String date);

    List<JSONObject> findByDateBetween(String startTime, String endTime);

    List<JSONObject> findByMoneyBetween(double min, double max);

    //按周统计
    List<JSONObject> findAllWeekly();

    JSONObject findByWeek(String week);

    //按月统计
    List<JSONObject> findAllMonthly();

    JSONObject findByMonth(String month);
}
