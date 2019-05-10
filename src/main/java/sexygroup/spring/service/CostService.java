package sexygroup.spring.service;

import com.alibaba.fastjson.JSONObject;
import sexygroup.spring.pojo.Cost;

import java.util.List;
import java.util.Optional;

public interface CostService {

    List<Cost> findAll();

    Optional<Cost> findById(Integer id);

    Cost save(Cost cost);

    void deleteById(Integer id);

    List<JSONObject> findAllDetail();

    JSONObject findByIdDetail(Integer id);

    List<JSONObject> findByCardIdDetail(Integer id);
    List<JSONObject> findByClientIdDetail(Integer id);
    List<JSONObject> findByClientNameDetail(String name);
    List<JSONObject> findByServiceIdDetail(Integer id);
    List<JSONObject> findByServiceNameDetail(String name);
    List<JSONObject> findByDateBetweenDetail(String startTime,String endTime);
}
