package sexygroup.spring.service.impl;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.common.service.impl.BaseServiceImpl;
import sexygroup.spring.dao.ClientRepository;
import sexygroup.spring.pojo.Client;
import sexygroup.spring.service.ClientService;
import sexygroup.spring.utils.JsonUtil;

import java.io.File;
import java.util.List;

@Service
@Transactional
public class ClientServiceImpl extends BaseServiceImpl<Client, ClientRepository> implements ClientService {

    @Autowired
    private ClientRepository clientRepository;

    @Override
    public List<JSONObject> findAllDetail() {
        return JsonUtil.convertList(clientRepository.findAllDetail());
    }

    @Override
    public JSONObject findByImageId(Integer id) {
        return JsonUtil.convertJSONObject(clientRepository.findByImageId(id));
    }

    @Override
    public List<JSONObject> findByImageDateBetween(String startTime, String endTime) {
        return JsonUtil.convertList(clientRepository.findByImageDateBetween(startTime, endTime));
    }

    @Override
    public List<JSONObject> findByClientId(Integer id) {
        return JsonUtil.convertList(clientRepository.findByClientId(id));
    }

    @Override
    public List<JSONObject> findByClientName(String name) {
        return JsonUtil.convertList(clientRepository.findByClientName(name));
    }

    @Override
    public List<JSONObject> findByClientPhone(String phone) {
        return JsonUtil.convertList(clientRepository.findByClientPhone(phone));
    }

    @Override
    public JSONObject findProfileByClientId(Integer id) {
        return JsonUtil.convertJSONObject(clientRepository.findProfileByClientId(id));
    }

    @Override
    public List<JSONObject> findAllProfileByCardId(Integer id) {
        return JsonUtil.convertList(clientRepository.findAllProfileByCardId(id));
    }

    @Override
    public boolean deleteClient(Integer clientId, String fileDir) {
        //删除图片
        List<JSONObject>imageList=clientRepository.findByClientId(clientId);
        for (JSONObject image:imageList){
            File file=new File(fileDir+image.getString("image_name"));
            //删除文件
            if (file.exists()){
                file.delete();
            }
        }
        //删除客户
        clientRepository.deleteById(clientId);
        return true;
    }
}
