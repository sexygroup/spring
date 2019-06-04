package sexygroup.spring.service.impl;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.dao.RechargeRepository;
import sexygroup.spring.pojo.Recharge;
import sexygroup.spring.service.RechargeService;
import sexygroup.spring.utils.JsonUtil;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class RechargeServiceImpl implements RechargeService {
    @Autowired
    private RechargeRepository rechargeRepository;


    @Override
    public List<Recharge> findAll() {
        return rechargeRepository.findAll();
    }

    @Override
    public Optional<Recharge> findById(Integer id) {
        return rechargeRepository.findById(id);
    }

    @Override
    public Recharge save(Recharge recharge) {
        return rechargeRepository.save(recharge);
    }

    @Override
    public void deleteById(Integer id) {
        rechargeRepository.deleteById(id);
    }

    @Override
    public List<JSONObject> findAllDetail() {
        return (List<JSONObject>) JsonUtil.convert(rechargeRepository.findAllDetail().toString());
    }

    @Override
    public JSONObject findByIdDetail(Integer id) {
        return (JSONObject)JsonUtil.convert(rechargeRepository.findByIdDetail(id).toJSONString());
    }

    @Override
    public List<JSONObject> findByCardIdDetail(Integer id) {
        return (List<JSONObject>) JsonUtil.convert(rechargeRepository.findByCardIdDetail(id).toString());
    }

    @Override
    public List<JSONObject> findByClientIdDetail(Integer id) {
        return (List<JSONObject>) JsonUtil.convert(rechargeRepository.findByClientIdDetail(id).toString());
    }

    @Override
    public List<JSONObject> findByClientNameDetail(String name) {
        return (List<JSONObject>) JsonUtil.convert(rechargeRepository.findByClientNameDetail(name).toString());
    }

    @Override
    public List<JSONObject> findByDateBetweenDetail(String startTime, String endTime) {
        return (List<JSONObject>) JsonUtil.convert(rechargeRepository.findByDateBetweenDetail(startTime, endTime).toString());
    }

}
