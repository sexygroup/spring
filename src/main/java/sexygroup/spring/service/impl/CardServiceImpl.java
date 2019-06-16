package sexygroup.spring.service.impl;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.common.service.impl.BaseServiceImpl;
import sexygroup.spring.dao.CardRepository;
import sexygroup.spring.dao.ClientRepository;
import sexygroup.spring.pojo.Card;
import sexygroup.spring.pojo.Client;
import sexygroup.spring.service.CardService;
import sexygroup.spring.utils.JsonUtil;

import java.io.File;
import java.util.List;

@Service
@Transactional
public class CardServiceImpl extends BaseServiceImpl<Card, CardRepository> implements CardService {

    @Autowired
    private CardRepository cardRepository;
    @Autowired
    private ClientRepository clientRepository;

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

    @Override
    public JSONObject addNewCard(Card card, Client client) {
        card.setCardPoint(0.0);
        Card savedCard = cardRepository.save(card);
        client.setCardId(savedCard.getCardId());
        client.setClientIsHolder(1);
        Client savedClient = clientRepository.save(client);
        //生成返回值
        JSONObject jsonObject1 = (JSONObject) JSONObject.toJSON(savedCard);
        JSONObject jsonObject2 = (JSONObject) JSONObject.toJSON(savedClient);
        jsonObject1.putAll(jsonObject2);
        return jsonObject1;
    }

    @Override
    public Boolean deleteCard(Integer cardId, String fileDir) {
        //删除图片
        List<JSONObject> imageList = cardRepository.findClientByCardId(cardId);
        for (JSONObject image : imageList) {
            File file = new File(fileDir + image.getString("image_name"));
            //删除文件
            if (file.exists()) {
                file.delete();
            }
        }
        //删除卡
        cardRepository.deleteById(cardId);
        return true;
    }
}
