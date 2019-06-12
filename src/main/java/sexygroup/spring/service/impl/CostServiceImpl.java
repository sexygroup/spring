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
    public List<JSONObject> findByDateBetween(String startTime, String endTime) {
        return JsonUtil.convertList(costRepository.findByDateBetween(startTime, endTime));
    }

    @Override
    public List<JSONObject> findByMoneyBetween(double min, double max) {
        return JsonUtil.convertList(costRepository.findByMoneyBetween(min, max));
    }
}
