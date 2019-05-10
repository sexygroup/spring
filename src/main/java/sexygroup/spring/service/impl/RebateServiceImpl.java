package sexygroup.spring.service.impl;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.dao.RebateRepository;
import sexygroup.spring.pojo.Rebate;
import sexygroup.spring.service.RebateService;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class RebateServiceImpl implements RebateService {
    @Autowired
    RebateRepository rebateRepository;


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
        return rebateRepository.findAllDetail();
    }

    @Override
    public JSONObject findByIdDetail(Integer id) {
        return rebateRepository.findByIdDetail(id);
    }

    @Override
    public List<JSONObject> findByCardIdDetail(Integer id) {
        return rebateRepository.findByCardIdDetail(id);
    }

    @Override
    public List<JSONObject> findByClientIdDetail(Integer id) {
        return rebateRepository.findByClientIdDetail(id);
    }

    @Override
    public List<JSONObject> findByClientNameDetail(String name) {
        return rebateRepository.findByClientNameDetail(name);
    }

    @Override
    public List<JSONObject> findByReferrerIdDetail(Integer id) {
        return rebateRepository.findByReferrerIdDetail(id);
    }

    @Override
    public List<JSONObject> findByDataBetweenDetail(String startTime, String endTime) {
        return rebateRepository.findByDataBetweenDetail(startTime, endTime);
    }

}
