package sexygroup.spring.service;

import com.alibaba.fastjson.JSONObject;
import sexygroup.spring.pojo.Rebate;

import java.util.List;
import java.util.Optional;

public interface RebateService {

    List<Rebate> findAll();

    Optional<Rebate> findById(Integer id);

    Rebate save(Rebate rebate);

    void deleteById(Integer id);

    List<JSONObject> findAllDetail();

    JSONObject findByIdDetail(Integer id);

    List<JSONObject> findByCardIdDetail(Integer id);
    List<JSONObject> findByClientIdDetail(Integer id);
    List<JSONObject> findByClientNameDetail(String name);
    List<JSONObject> findByReferrerIdDetail(Integer id);
    List<JSONObject> findByDataBetweenDetail(String startTime,String endTime);
}
