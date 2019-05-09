package sexygroup.spring.service.impl;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.dao.CostRepository;
import sexygroup.spring.pojo.Cost;
import sexygroup.spring.service.CostService;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CostServiceImpl implements CostService {
    @Autowired
    CostRepository costRepository;


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
        return costRepository.findAllDetail();
    }

    @Override
    public JSONObject findByIdDetail(Integer id) {
        return costRepository.findByIdDetail(id);
    }
}
