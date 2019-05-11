package sexygroup.spring.service.impl;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.dao.CardRepository;
import sexygroup.spring.pojo.Card;
import sexygroup.spring.service.CardService;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CardServiceImpl implements CardService {
    @Autowired
    CardRepository cardRepository;


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
        return cardRepository.findAllDetail();
    }

    @Override
    public List<JSONObject> findByIdDetail(Integer id) {
        return cardRepository.findByIdDetail(id);
    }

    @Override
    public JSONObject findByCardIdAndClientIdDetail(Integer cardId, Integer clientId) {
        return cardRepository.findByCardIdAndClientIdDetail(cardId,clientId);
    }

    @Override
    public List<JSONObject> findByCardReferrerDetail(Integer id) {
        return cardRepository.findByCardReferrerDetail(id);
    }

    @Override
    public JSONObject findByHolderPhoneDetail(String phone) {
        return cardRepository.findByHolderPhoneDetail(phone);
    }

    @Override
    public List<JSONObject> findByHolderNameDetail(String name) {
        return cardRepository.findByHolderNameDetail(name);
    }

    @Override
    public JSONObject findHolderByCardId(Integer id) {
        return cardRepository.findHolderByCardId(id);
    }

}
