package sexygroup.spring.service.impl;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.dao.RebateRepository;
import sexygroup.spring.pojo.Rebate;
import sexygroup.spring.service.RebateService;
import sexygroup.spring.utils.JsonUtil;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class RebateServiceImpl implements RebateService {
    @Autowired
    private RebateRepository rebateRepository;


    @Override
    public List<Rebate> findAll() {
        return rebateRepository.findAll();
    }

    @Override
    public Optional<Rebate> findById(Integer id) {
        return rebateRepository.findById(id);
    }

    @Override
    public Rebate save(Rebate rebate) {
        return rebateRepository.save(rebate);
    }

    @Override
    public void deleteById(Integer id) {
        rebateRepository.deleteById(id);
    }

    @Override
    public List<JSONObject> findAllDetail() {
        return (List<JSONObject>) JsonUtil.convert(rebateRepository.findAllDetail().toString());
    }

    @Override
    public JSONObject findByIdDetail(Integer id) {
        return (JSONObject)JsonUtil.convert(rebateRepository.findByIdDetail(id).toJSONString());
    }

    @Override
    public List<JSONObject> findByCardIdDetail(Integer id) {
        return (List<JSONObject>) JsonUtil.convert(rebateRepository.findByCardIdDetail(id).toString());
    }

    @Override
    public List<JSONObject> findByClientIdDetail(Integer id) {
        return (List<JSONObject>) JsonUtil.convert(rebateRepository.findByClientIdDetail(id).toString());
    }

    @Override
    public List<JSONObject> findByClientNameDetail(String name) {
        return (List<JSONObject>) JsonUtil.convert(rebateRepository.findByClientNameDetail(name).toString());
    }

    @Override
    public List<JSONObject> findByReferrerIdDetail(Integer id) {
        return (List<JSONObject>) JsonUtil.convert(rebateRepository.findByReferrerIdDetail(id).toString());
    }

    @Override
    public List<JSONObject> findByDateBetweenDetail(String startTime, String endTime) {
        return (List<JSONObject>) JsonUtil.convert(rebateRepository.findByDateBetweenDetail(startTime, endTime).toString());
    }

}
