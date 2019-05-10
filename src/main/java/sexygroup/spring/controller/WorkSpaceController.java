package sexygroup.spring.controller;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.Api;
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
@Api("工作台接口")
public class WorkSpaceController {
    @Autowired
    WorkSpaceService workSpaceService;

    @PostMapping("/newCard")
    public JSONObject newCard(@RequestBody JSONObject jsonObject) {
        return workSpaceService.newCard(jsonObject);
    }

    @PostMapping("/cost")
    public JSONObject cost(@RequestBody JSONObject jsonObject) {
        return workSpaceService.newCard(jsonObject);
    }
}
