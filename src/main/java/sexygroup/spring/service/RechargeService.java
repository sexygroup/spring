package sexygroup.spring.service;

import com.alibaba.fastjson.JSONObject;
import sexygroup.spring.common.service.BaseService;
import sexygroup.spring.pojo.Recharge;

import java.util.List;

public interface RechargeService extends BaseService<Recharge> {

    List<JSONObject> findAllDetail();
    JSONObject findByRechargeId(Integer id);
    List<JSONObject> findByCardId(Integer id);
    List<JSONObject> findByDateBetween(String startTime, String endTime);
    List<JSONObject> findByPriceBetween(double min, double max);
    //撤销充值
    Integer cancelRecharge(Integer rechargeId);
}
