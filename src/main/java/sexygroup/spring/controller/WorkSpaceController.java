package sexygroup.spring.controller;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sexygroup.spring.pojo.Card;
import sexygroup.spring.pojo.Client;
import sexygroup.spring.service.CardService;
import sexygroup.spring.service.ClientService;
import sexygroup.spring.service.WorkSpaceService;

@RestController
@RequestMapping("/workSpace")
@Api(tags="工作台接口")
public class WorkSpaceController {
    @Autowired
    WorkSpaceService workSpaceService;

    @ApiOperation(value = "办卡接口",notes = "参数格式：" +
            "{" +
            "   card:{...}," +
            "   client:{...}" +
            "}")
    @PostMapping("/newCard")
    public JSONObject newCard(@RequestBody JSONObject jsonObject) {
        return workSpaceService.newCard(jsonObject);
    }

    @ApiOperation(value = "消费接口",notes = "返回JSON")
    @PostMapping("/cost")
    public JSONObject cost(@RequestBody JSONObject jsonObject) {
        return workSpaceService.cost(jsonObject);
    }

    @ApiOperation(value = "充值接口",notes = "参数格式：" +
            "{" +
            "   cardId: ...," +
            "   rechargePrice: ..." +
            "}")
    @PostMapping("/recharge")
    public JSONObject recharge(@RequestBody JSONObject jsonObject) {
        return workSpaceService.recharge(jsonObject);
    }

    @ApiOperation(value = "提现接口",notes = "参数格式：" +
            "{" +
            "   cardId: ...," +
            "   drawingsPrice: ..." +
            "}")
    @PostMapping("/drawings")
    public JSONObject drawings(@RequestBody JSONObject jsonObject) {
        return workSpaceService.drawings(jsonObject);
    }
}
