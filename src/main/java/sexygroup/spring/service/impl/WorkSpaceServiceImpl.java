package sexygroup.spring.service.impl;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import io.swagger.models.auth.In;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.dao.*;
import sexygroup.spring.pojo.*;
import sexygroup.spring.service.WorkSpaceService;

import java.util.Optional;

@Service
@Transactional
public class WorkSpaceServiceImpl implements WorkSpaceService {

    @Autowired
    CardRepository cardRepository;

    @Autowired
    ClientRepository clientRepository;

    @Autowired
    CardClientRepository cardClientRepository;

    @Autowired
    CostRepository costRepository;

    @Autowired
    RechargeRepository rechargeRepository;

    @Autowired
    RebateRepository rebateRepository;

    @Autowired
    DrawingsRepository drawingsRepository;

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

    @Override
    public JSONObject cost(JSONObject jsonObject) {
        Integer cardId=jsonObject.getInteger("cardId");
        Integer clientId=jsonObject.getInteger("clientId");

        Card card=cardRepository.findById(cardId).get();

        //判断是否可以返利（推荐人不为空且存在）
        boolean isRebate=card.getCardReferrer()!=null && cardRepository.existsById(card.getCardReferrer());
        //推荐人卡
        Card referrerCard=new Card();
        if (isRebate){
            referrerCard=cardRepository.findById(card.getCardReferrer()).get();
        }

        JSONArray serviceList=jsonObject.getJSONArray("serviceList");
        //逐条保存
        for (int i=0;i<serviceList.size();++i){
            JSONObject service=serviceList.getJSONObject(i);
            double servicePrice=service.getDouble("servicePrice");

            //修改卡余额
            card.setCardMoney(card.getCardMoney()-servicePrice);
            //添加消费记录
            Cost cost=new Cost();
            cost.setCardId(cardId);
            cost.setClientId(clientId);
            cost.setServiceId(service.getInteger("serviceId"));
            cost.setCostPrice(servicePrice);
            cost.setCostMoney(card.getCardMoney());
            costRepository.save(cost);
            //返利
            if (isRebate){
                //修改推荐人积分
                double rebatePrice=servicePrice*service.getDouble("servicePercent");
                referrerCard.setCardPoint(referrerCard.getCardPoint()+rebatePrice);

                //添加返利记录
                Rebate rebate=new Rebate();
                rebate.setCardId(referrerCard.getCardId());
                rebate.setRebatePrice(rebatePrice);
                rebate.setRebateMoney(referrerCard.getCardPoint());
                rebateRepository.save(rebate);
            }
        }
        cardRepository.save(card);
        cardRepository.save(referrerCard);
        return (JSONObject) JSONObject.toJSON(card);
    }

    @Override
    public JSONObject recharge(JSONObject jsonObject) {
        Integer cardId=jsonObject.getInteger("cardId");
        double rechargePrice=jsonObject.getDouble("rechargePrice");
        //修改卡信息
        Card card=cardRepository.findById(cardId).get();
        card.setCardMoney(card.getCardMoney()+rechargePrice);
        cardRepository.save(card);
        //添加充值记录
        Recharge recharge=new Recharge();
        recharge.setCardId(cardId);
        recharge.setRechargePrice(rechargePrice);
        recharge.setRechargeMoney(card.getCardMoney());
        rechargeRepository.save(recharge);

        return (JSONObject) JSONObject.toJSON(card);
    }

    @Override
    public JSONObject drawings(JSONObject jsonObject) {
        Integer cardId=jsonObject.getInteger("cardId");
        double drawingsPrice=jsonObject.getDouble("drawingsPrice");
        //修改卡信息
        Card card=cardRepository.findById(cardId).get();
        card.setCardPoint(card.getCardPoint()-drawingsPrice);
        cardRepository.save(card);
        //添加提现记录
        Drawings drawings=new Drawings();
        drawings.setCardId(cardId);
        drawings.setDrawingsPrice(drawingsPrice);
        drawings.setDrawingsMoney(card.getCardPoint());
        drawingsRepository.save(drawings);

        return (JSONObject) JSONObject.toJSON(card);
    }
}
