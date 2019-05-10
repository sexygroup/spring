package sexygroup.spring.service;

import com.alibaba.fastjson.JSONObject;

public interface WorkSpaceService {
    JSONObject newCard(JSONObject jsonObject);
    JSONObject cost(JSONObject jsonObject);
    JSONObject recharge(JSONObject jsonObject);
    JSONObject drawings(JSONObject jsonObject);
}
