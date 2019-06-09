package sexygroup.spring.service.impl;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.common.service.impl.BaseServiceImpl;
import sexygroup.spring.dao.CardRepository;
import sexygroup.spring.pojo.Card;
import sexygroup.spring.service.CardService;
import sexygroup.spring.utils.JsonUtil;

import java.util.List;

@Service
@Transactional
public class CardServiceImpl extends BaseServiceImpl<Card, CardRepository> implements CardService {

    @Autowired
    private CardRepository cardRepository;

    @Override
    public List<JSONObject> findAllDetail() {
        return JsonUtil.convertList(cardRepository.findAllDetail());
    }

    @Override
    public List<JSONObject> findAllHolder() {
        return JsonUtil.convertList(cardRepository.findAllHolder());
    }

    @Override
    public List<JSONObject> findByCardId(Integer id) {
        return JsonUtil.convertList(cardRepository.findByCardId(id));
    }

    @Override
    public JSONObject findHolderByCardId(Integer id) {
        return JsonUtil.convertJSONObject(cardRepository.findHolderByCardId(id));
    }

    @Override
    public JSONObject findReferrerByCardId(Integer id) {
        return JsonUtil.convertJSONObject(cardRepository.findReferrerByCardId(id));
    }

    @Override
    public List<JSONObject> findByReferrer(Integer referrer) {
        return JsonUtil.convertList(cardRepository.findByReferrer(referrer));
    }

    @Override
    public List<JSONObject> findByHolderName(String name) {
        return JsonUtil.convertList(cardRepository.findByHolderName(name));
    }

    @Override
    public List<JSONObject> findByHolderPhone(String phone) {
        return JsonUtil.convertList(cardRepository.findByHolderPhone(phone));
    }

    @Override
    public List<JSONObject> findByClientGender(String gender) {
        return JsonUtil.convertList(cardRepository.findByClientGender(gender));
    }

    @Override
    public List<JSONObject> findByClientAge(String age) {
        return JsonUtil.convertList(cardRepository.findByClientAge(age));
    }

    @Override
    public JSONObject findByClientId(Integer id) {
        return JsonUtil.convertJSONObject(cardRepository.findByClientId(id));
    }

    @Override
    public List<JSONObject> findByClientName(String name) {
        return JsonUtil.convertList(cardRepository.findByClientName(name));
    }

    @Override
    public List<JSONObject> findByClientPhone(String phone) {
        return JsonUtil.convertList(cardRepository.findByClientPhone(phone));
    }

    @Override
    public List<JSONObject> findByMoneyBetween(double min, double max) {
        return JsonUtil.convertList(cardRepository.findByMoneyBetween(min, max));
    }
    @Override
    public List<JSONObject> findByPointBetween(double min, double max) {
        return JsonUtil.convertList(cardRepository.findByPointBetween(min, max));
    }
}
