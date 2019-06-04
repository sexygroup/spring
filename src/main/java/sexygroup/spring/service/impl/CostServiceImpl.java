package sexygroup.spring.service.impl;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.dao.CostRepository;
import sexygroup.spring.pojo.Cost;
import sexygroup.spring.service.CostService;
import sexygroup.spring.utils.JsonUtil;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CostServiceImpl implements CostService {
    @Autowired
    private CostRepository costRepository;


    @Override
    public List<Cost> findAll() {
        return costRepository.findAll();
    }

    @Override
    public Optional<Cost> findById(Integer id) {
        return costRepository.findById(id);
    }

    @Override
    public Cost save(Cost cost) {
        return costRepository.save(cost);
    }

    @Override
    public void deleteById(Integer id) {
        costRepository.deleteById(id);
    }

    @Override
    public List<JSONObject> findAllDetail() {
        return (List<JSONObject>) JsonUtil.convert(costRepository.findAllDetail().toString());
    }

    @Override
    public JSONObject findByIdDetail(Integer id) {
        return (JSONObject) JsonUtil.convert(costRepository.findByIdDetail(id).toJSONString());
    }

    @Override
    public List<JSONObject> findByCardIdDetail(Integer id) {
        return (List<JSONObject>) JsonUtil.convert(costRepository.findByCardIdDetail(id).toString());
    }

    @Override
    public List<JSONObject> findByClientIdDetail(Integer id) {
        return (List<JSONObject>) JsonUtil.convert(costRepository.findByClientIdDetail(id).toString());
    }

    @Override
    public List<JSONObject> findByClientNameDetail(String name) {
        return (List<JSONObject>) JsonUtil.convert(costRepository.findByClientNameDetail(name).toString());
    }

    @Override
    public List<JSONObject> findByServiceIdDetail(Integer id) {
        return (List<JSONObject>) JsonUtil.convert(costRepository.findByServiceIdDetail(id).toString());
    }

    @Override
    public List<JSONObject> findByServiceNameDetail(String name) {
        return (List<JSONObject>) JsonUtil.convert(costRepository.findByServiceNameDetail(name).toString());
    }

    @Override
    public List<JSONObject> findByDateBetweenDetail(String startTime, String endTime) {
        return (List<JSONObject>) JsonUtil.convert(costRepository.findByDateBetweenDetail(startTime,endTime).toString());
    }
}
