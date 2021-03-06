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
    JSONObject findByClientId(Integer id);

    List<JSONObject> findByClientName(String name);

    //通过客户年龄查
    List<JSONObject> findByClientAge(String age);

    List<JSONObject> findByClientPhone(String phone);

    //通过客户id查所有图片信息(包含客户和图片信息)
    List<JSONObject> findImageByClientId(Integer id);

    List<JSONObject> findImageByClientName(String name);

    List<JSONObject> findImageByClientAge(String age);

    //查头像
    JSONObject findProfileByClientId(Integer id);

    List<JSONObject> findAllProfileByCardId(Integer id);

    //通过客户id删除客户及其图片
    Boolean deleteClient(Integer clientId, String fileDir);


}
