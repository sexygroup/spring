package sexygroup.spring.service;

import com.alibaba.fastjson.JSONObject;
import io.swagger.models.auth.In;
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
    //通过客户id删除客户及其图片
    boolean deleteClient(Integer clientId,String fileDir);
}
