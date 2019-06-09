package sexygroup.spring.service.impl;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.common.service.impl.BaseServiceImpl;
import sexygroup.spring.dao.RechargeRepository;
import sexygroup.spring.pojo.Recharge;
import sexygroup.spring.service.RechargeService;
import sexygroup.spring.utils.JsonUtil;

import java.util.List;

@Service
@Transactional
public class RechargeServiceImpl extends BaseServiceImpl<Recharge, RechargeRepository> implements RechargeService {

    @Autowired
    private RechargeRepository rechargeRepository;

    @Override
    public List<JSONObject> findAllDetail() {
        return JsonUtil.convertList(rechargeRepository.findAllDetail());
    }

    @Override
    public JSONObject findByRechargeId(Integer id) {
        return JsonUtil.convertJSONObject(rechargeRepository.findByRechargeId(id));
    }

    @Override
    public List<JSONObject> findByCardId(Integer id) {
        return JsonUtil.convertList(rechargeRepository.findByCardId(id));
    }

    @Override
    public List<JSONObject> findByDateBetween(String startTime, String endTime) {
        return JsonUtil.convertList(rechargeRepository.findByDateBetween(startTime, endTime));
    }

    @Override
    public List<JSONObject> findByPriceBetween(double min, double max) {
        return JsonUtil.convertList(rechargeRepository.findByPriceBetween(min, max));
    }
}
