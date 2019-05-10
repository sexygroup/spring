package sexygroup.spring.service;

import com.alibaba.fastjson.JSONObject;
import sexygroup.spring.pojo.Recharge;

import java.util.List;
import java.util.Optional;

public interface RechargeService {

    List<Recharge> findAll();

    Optional<Recharge> findById(Integer id);

    Recharge save(Recharge recharge);

    void deleteById(Integer id);

    List<JSONObject> findAllDetail();

    JSONObject findByIdDetail(Integer id);

    List<JSONObject> findByCardIdDetail(Integer id);
    List<JSONObject> findByClientIdDetail(Integer id);
    List<JSONObject> findByClientNameDetail(String name);
    List<JSONObject> findByDataBetweenDetail(String startTime,String endTime);
}
