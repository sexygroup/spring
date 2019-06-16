package sexygroup.spring.service.impl;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.common.service.impl.BaseServiceImpl;
import sexygroup.spring.dao.CostRepository;
import sexygroup.spring.pojo.Cost;
import sexygroup.spring.service.CostService;
import sexygroup.spring.utils.JsonUtil;

import java.util.List;

@Service
@Transactional
public class CostServiceImpl extends BaseServiceImpl<Cost, CostRepository> implements CostService {

    @Autowired
    private CostRepository costRepository;


    @Override
    public JSONObject findByDateEquals(String date) {
        return JsonUtil.convertJSONObject(costRepository.findByDateEquals(date));
    }

    @Override
    public List<JSONObject> findByDateBetween(String startTime, String endTime) {
        return JsonUtil.convertList(costRepository.findByDateBetween(startTime, endTime));
    }

    @Override
    public List<JSONObject> findByMoneyBetween(double min, double max) {
        return JsonUtil.convertList(costRepository.findByMoneyBetween(min, max));
    }

    @Override
    public List<JSONObject> findAllWeekly() {
        return JsonUtil.convertList(costRepository.findAllWeekly());
    }

    @Override
    public JSONObject findByWeek(String week) {
        return JsonUtil.convertJSONObject(costRepository.findByWeek(week));
    }

    @Override
    public List<JSONObject> findAllMonthly() {
        return JsonUtil.convertList(costRepository.findAllMonthly());
    }

    @Override
    public JSONObject findByMonth(String month) {
        return JsonUtil.convertJSONObject(costRepository.findByMonth(month));
    }


}
