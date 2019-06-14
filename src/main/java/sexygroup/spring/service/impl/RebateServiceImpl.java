package sexygroup.spring.service.impl;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.dao.RebateRepository;
import sexygroup.spring.service.RebateService;
import sexygroup.spring.utils.JsonUtil;

import java.util.List;

@Service
@Transactional
public class RebateServiceImpl implements RebateService {

    @Autowired
    private RebateRepository rebateRepository;

    @Override
    public List<JSONObject> findAllDetail() {
        return JsonUtil.convertList(rebateRepository.findAllDetail());
    }

    @Override
    public JSONObject findByConsumeId(Integer id) {
        return JsonUtil.convertJSONObject(rebateRepository.findByConsumeId(id));
    }

    @Override
    public List<JSONObject> findByDateBetween(String startTime, String endTime) {
        return JsonUtil.convertList(rebateRepository.findByDateBetween(startTime, endTime));
    }

    @Override
    public List<JSONObject> findByStaffId(Integer id) {
        return JsonUtil.convertList(rebateRepository.findByStaffId(id));
    }

    @Override
    public List<JSONObject> findByStaffName(String name) {
        return JsonUtil.convertList(rebateRepository.findByStaffName(name));
    }

    @Override
    public List<JSONObject> findByCardId(Integer id) {
        return JsonUtil.convertList(rebateRepository.findByCardId(id));
    }

    @Override
    public List<JSONObject> findByReferrerCardId(Integer id) {
        return JsonUtil.convertList(rebateRepository.findByReferrerCardId(id));
    }

    @Override
    public List<JSONObject> findByClientId(Integer id) {
        return JsonUtil.convertList(rebateRepository.findByClientId(id));
    }

    @Override
    public List<JSONObject> findByClientName(String name) {
        return JsonUtil.convertList(rebateRepository.findByClientName(name));
    }

    @Override
    public List<JSONObject> findByClientPhone(String phone) {
        return JsonUtil.convertList(rebateRepository.findByClientPhone(phone));
    }

    @Override
    public List<JSONObject> findByReferrerClientId(Integer id) {
        return JsonUtil.convertList(rebateRepository.findByReferrerClientId(id));
    }

    @Override
    public List<JSONObject> findByReferrerClientName(String name) {
        return JsonUtil.convertList(rebateRepository.findByReferrerClientName(name));
    }

    @Override
    public List<JSONObject> findByReferrerClientPhone(String phone) {
        return JsonUtil.convertList(rebateRepository.findByReferrerClientPhone(phone));
    }

    @Override
    public List<JSONObject> findByServiceId(Integer id) {
        return JsonUtil.convertList(rebateRepository.findByServiceId(id));
    }

    @Override
    public List<JSONObject> findByServiceName(String name) {
        return JsonUtil.convertList(rebateRepository.findByServiceName(name));
    }

}
