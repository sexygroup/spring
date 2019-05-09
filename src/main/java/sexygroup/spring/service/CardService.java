package sexygroup.spring.service;

import com.alibaba.fastjson.JSONObject;
import io.swagger.models.auth.In;
import sexygroup.spring.pojo.Card;

import java.util.List;
import java.util.Optional;

public interface CardService {

    List<Card> findAll();

    Optional<Card> findById(Integer id);

    Card save(Card card);

    void deleteById(Integer id);

    //detail
    List<JSONObject> findAllDetail();

    List<JSONObject> findByIdDetail(Integer id);
}
