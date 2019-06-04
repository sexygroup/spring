package sexygroup.spring.service.impl;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.dao.CardRepository;
import sexygroup.spring.pojo.Card;
import sexygroup.spring.service.CardService;
import sexygroup.spring.utils.JsonUtil;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CardServiceImpl implements CardService {
    @Autowired
    private CardRepository cardRepository;


    @Override
    public List<Card> findAll() {
        return cardRepository.findAll();
    }

    @Override
    public Optional<Card> findById(Integer id) {
        return cardRepository.findById(id);
    }

    @Override
    public Card save(Card card) {
        return cardRepository.save(card);
    }

    @Override
    public void deleteById(Integer id) {
        cardRepository.deleteById(id);
    }

    @Override
    public List<JSONObject> findAllDetail() {
        return (List<JSONObject>) JsonUtil.convert(cardRepository.findAllDetail().toString());
    }

    @Override
    public List<JSONObject> findByIdDetail(Integer id) {
        return (List<JSONObject>) JsonUtil.convert(cardRepository.findByIdDetail(id).toString());
    }

    @Override
    public JSONObject findByCardIdAndClientIdDetail(Integer cardId, Integer clientId) {
        return (JSONObject)JsonUtil.convert(cardRepository.findByCardIdAndClientIdDetail(cardId,clientId).toJSONString());
    }

    @Override
    public List<JSONObject> findByCardReferrerDetail(Integer id) {
        return (List<JSONObject>) JsonUtil.convert(cardRepository.findByCardReferrerDetail(id).toString());
    }

    @Override
    public JSONObject findByHolderPhoneDetail(String phone) {
        return (JSONObject)JsonUtil.convert(cardRepository.findByHolderPhoneDetail(phone).toJSONString());
    }

    @Override
    public List<JSONObject> findByHolderNameDetail(String name) {
        return (List<JSONObject>) JsonUtil.convert(cardRepository.findByHolderNameDetail(name).toString());
    }

    @Override
    public JSONObject findHolderByCardId(Integer id) {
        return (JSONObject)JsonUtil.convert(cardRepository.findHolderByCardId(id).toJSONString());
    }

    @Override
    public List<JSONObject> findAllHolderDetail() {
        return (List<JSONObject>) JsonUtil.convert(cardRepository.findAllHolderDetail().toString());
    }

}
