package sexygroup.spring.service;

import com.alibaba.fastjson.JSONObject;
import sexygroup.spring.common.service.BaseService;
import sexygroup.spring.pojo.Client;

import java.util.List;

public interface ClientService extends BaseService<Client> {

    List<JSONObject> findAllDetail();
    //通过图片信息查
    JSONObject findByImageId(Integer id);
    List<JSONObject> findByImageDateBetween(String startTime, String endTime);
    //通过客户信息查
    List<JSONObject> findByClientId(Integer id);
    List<JSONObject> findByClientName(String name);
    List<JSONObject> findByClientPhone(String phone);
    //查头像
    JSONObject findProfileByClientId(Integer id);
    List<JSONObject> findAllProfileByCardId(Integer id);
}
