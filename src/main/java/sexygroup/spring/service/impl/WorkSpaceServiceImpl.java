package sexygroup.spring.service.impl;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.dao.CardRepository;
import sexygroup.spring.dao.ClientRepository;
import sexygroup.spring.pojo.Card;
import sexygroup.spring.pojo.Client;
import sexygroup.spring.service.WorkSpaceService;

@Service
@Transactional
public class WorkSpaceServiceImpl implements WorkSpaceService {

    @Autowired
    CardRepository cardRepository;

    @Autowired
    ClientRepository clientRepository;

    @Override
    public JSONObject newCard(JSONObject jsonObject) {
        //解析JSON
        JSONObject cardJSON=jsonObject.getJSONObject("card");
        JSONObject clientJSON=jsonObject.getJSONObject("client");
        Card card=JSONObject.parseObject(cardJSON.toJSONString(),Card.class);
        Client client=JSONObject.parseObject(clientJSON.toJSONString(),Client.class);


        return null;
    }
}
