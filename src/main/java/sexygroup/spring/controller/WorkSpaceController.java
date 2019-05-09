package sexygroup.spring.controller;

import com.alibaba.fastjson.JSONObject;
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
@RequestMapping("/workspace")
public class WorkSpaceController {
    @Autowired
    WorkSpaceService workSpaceService;

    @PostMapping("/newcard")
    public JSONObject save(@RequestBody JSONObject jsonObject) {
        return workSpaceService.newCard(jsonObject);
    }
}
