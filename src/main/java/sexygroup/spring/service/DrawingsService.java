package sexygroup.spring.service;

import com.alibaba.fastjson.JSONObject;
import sexygroup.spring.pojo.Drawings;

import java.util.List;
import java.util.Optional;

public interface DrawingsService {

    List<Drawings> findAll();

    Optional<Drawings> findById(Integer id);

    Drawings save(Drawings drawings);

    void deleteById(Integer id);

    List<JSONObject> findAllDetail();

    JSONObject findByIdDetail(Integer id);

    List<JSONObject> findByCardIdDetail(Integer id);
    List<JSONObject> findByClientIdDetail(Integer id);
    List<JSONObject> findByClientNameDetail(String name);
    List<JSONObject> findByDataBetweenDetail(String startTime,String endTime);
}
