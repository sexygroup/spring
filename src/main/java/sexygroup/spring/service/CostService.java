package sexygroup.spring.service;

import com.alibaba.fastjson.JSONObject;
import sexygroup.spring.common.service.BaseService;
import sexygroup.spring.pojo.Cost;

import java.util.List;

public interface CostService extends BaseService<Cost> {
    JSONObject findByDateEquals(String date);

    List<JSONObject> findByDateBetween(String startTime, String endTime);

    List<JSONObject> findByMoneyBetween(double min, double max);
}
