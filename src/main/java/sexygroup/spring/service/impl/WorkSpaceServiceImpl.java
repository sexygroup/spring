package sexygroup.spring.service.impl;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.dao.CardClientRepository;
import sexygroup.spring.dao.CardRepository;
import sexygroup.spring.dao.ClientRepository;
import sexygroup.spring.pojo.Card;
import sexygroup.spring.pojo.CardClient;
import sexygroup.spring.pojo.CardClientKey;
import sexygroup.spring.pojo.Client;
import sexygroup.spring.service.WorkSpaceService;

@Service
@Transactional
public class WorkSpaceServiceImpl implements WorkSpaceService {

    @Autowired
    CardRepository cardRepository;

    @Autowired
    ClientRepository clientRepository;

    @Autowired
    CardClientRepository cardClientRepository;

    @Override
    public JSONObject newCard(JSONObject jsonObject) {
        //解析JSON
        JSONObject cardJSON=jsonObject.getJSONObject("card");
        JSONObject clientJSON=jsonObject.getJSONObject("client");
        Card card=JSONObject.parseObject(cardJSON.toJSONString(),Card.class);
        Client client=JSONObject.parseObject(clientJSON.toJSONString(),Client.class);

        //保存
        card=cardRepository.save(card);
        client=clientRepository.save(client);

        CardClientKey cardClientKey=new CardClientKey();
        cardClientKey.setCardId(card.getCardId());
        cardClientKey.setClientId(client.getClientId());

        CardClient cardClient=new CardClient();
        cardClient.setCardClientKey(cardClientKey);
        cardClient.setIsHolder(clientJSON.getString("isHolder"));

        cardClientRepository.save(cardClient);

        //修改返回信息
        jsonObject.put("card",card);
        jsonObject.put("client",client);
        jsonObject.put("cardClient",cardClient);
        return jsonObject;
    }
}
