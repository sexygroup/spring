package sexygroup.spring.service;

import com.alibaba.fastjson.JSONObject;
import sexygroup.spring.common.service.BaseService;
import sexygroup.spring.pojo.Card;

import java.util.List;

public interface CardService extends BaseService<Card> {
    List<JSONObject> findAllDetail();
    List<JSONObject> findAllHolder();
    List<JSONObject> findByCardId(Integer id);
    JSONObject findHolderByCardId(Integer id);
    JSONObject findReferrerByCardId(Integer id);
    List<JSONObject> findByReferrer(Integer referrer);
    //通过持卡人条件查
    List<JSONObject> findByHolderName(String name);
    List<JSONObject> findByHolderPhone(String phone);
    //通过客户条件查
    JSONObject findByClientId(Integer id);
    List<JSONObject> findByClientName(String name);
    List<JSONObject> findByClientPhone(String phone);
    List<JSONObject> findByClientGender(String gender);
    List<JSONObject> findByClientAge(String age);

    List<JSONObject> findByMoneyBetween(double min, double max);
    List<JSONObject> findByPointBetween(double min, double max);
}
