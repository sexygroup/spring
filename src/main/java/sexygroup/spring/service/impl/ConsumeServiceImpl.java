package sexygroup.spring.service.impl;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.common.service.impl.BaseServiceImpl;
import sexygroup.spring.dao.ConsumeRepository;
import sexygroup.spring.pojo.Consume;
import sexygroup.spring.service.ConsumeService;
import sexygroup.spring.utils.JsonUtil;

import java.util.List;

@Service
@Transactional
public class ConsumeServiceImpl extends BaseServiceImpl<Consume, ConsumeRepository> implements ConsumeService {

    @Autowired
    private ConsumeRepository consumeRepository;

    @Override
    public List<JSONObject> findAllDetail() {
        return JsonUtil.convertList(consumeRepository.findAllDetail());
    }

    @Override
    public JSONObject findByConsumeId(Integer id) {
        return JsonUtil.convertJSONObject(consumeRepository.findByConsumeId(id));
    }

    @Override
    public List<JSONObject> findByDateBetween(String startTime, String endTime) {
        return JsonUtil.convertList(consumeRepository.findByDateBetween(startTime, endTime));
    }

    @Override
    public List<JSONObject> findByStaffId(Integer id) {
        return JsonUtil.convertList(consumeRepository.findByStaffId(id));
    }

    @Override
    public List<JSONObject> findByStaffName(String name) {
        return JsonUtil.convertList(consumeRepository.findByStaffName(name));
    }

    @Override
    public List<JSONObject> findByCardId(Integer id) {
        return JsonUtil.convertList(consumeRepository.findByCardId(id));
    }

    @Override
    public List<JSONObject> findByCardReferrer(Integer id) {
        return JsonUtil.convertList(consumeRepository.findByCardReferrer(id));
    }

    @Override
    public List<JSONObject> findByClientId(Integer id) {
        return JsonUtil.convertList(consumeRepository.findByClientId(id));
    }

    @Override
    public List<JSONObject> findByClientName(String name) {
        return JsonUtil.convertList(consumeRepository.findByClientName(name));
    }

    @Override
    public List<JSONObject> findByClientPhone(String phone) {
        return JsonUtil.convertList(consumeRepository.findByClientPhone(phone));
    }

    @Override
    public List<JSONObject> findByClientGender(String gender) {
        return JsonUtil.convertList(consumeRepository.findByClientGender(gender));
    }

    @Override
    public List<JSONObject> findByClientAge(String age) {
        return JsonUtil.convertList(consumeRepository.findByClientAge(age));
    }

    @Override
    public List<JSONObject> findByServiceId(Integer id) {
        return JsonUtil.convertList(consumeRepository.findByServiceId(id));
    }

    @Override
    public List<JSONObject> findByServiceName(String name) {
        return JsonUtil.convertList(consumeRepository.findByServiceName(name));
    }

    @Override
    public Integer cancelConsume(Integer consumeId) {
        return consumeRepository.cancelConsume(consumeId);
    }
}
