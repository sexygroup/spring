package sexygroup.spring.service;

import com.alibaba.fastjson.JSONObject;

import java.util.List;

public interface RebateService {

    List<JSONObject> findAllDetail();

    //通过消费信息查
    JSONObject findByConsumeId(Integer id);

    List<JSONObject> findByDateBetween(String startTime, String endTime);

    //通过员工信息查
    List<JSONObject> findByStaffId(Integer id);

    List<JSONObject> findByStaffName(String name);

    //通过卡信息查
    List<JSONObject> findByCardId(Integer id);

    List<JSONObject> findByReferrerCardId(Integer id);

    //通过客户信息查
    List<JSONObject> findByClientId(Integer id);

    List<JSONObject> findByClientName(String name);

    List<JSONObject> findByClientPhone(String phone);

    //通过推荐人信息查
    List<JSONObject> findByReferrerClientId(Integer id);

    List<JSONObject> findByReferrerClientName(String name);

    List<JSONObject> findByReferrerClientPhone(String phone);

    //通过服务信息查
    List<JSONObject> findByServiceId(Integer id);

    List<JSONObject> findByServiceName(String name);

}
