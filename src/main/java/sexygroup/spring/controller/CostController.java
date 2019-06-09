package sexygroup.spring.controller;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sexygroup.spring.common.controller.BaseController;
import sexygroup.spring.pojo.Cost;
import sexygroup.spring.service.CostService;

import java.util.List;

@RestController
@RequestMapping("/cost")
@Api(tags="成本")
public class CostController extends BaseController<Cost, CostService> {
    @Autowired
    private CostService costService;

    @GetMapping("/findByDateBetween")
    @ApiOperation(value = "通过日期范围查询（日期格式：2019-01-01 00:00:00）",notes = "return List")
    public List<JSONObject> findByDateBetween(String startTime, String endTime) {
        return costService.findByDateBetween(startTime, endTime);
    }

    @GetMapping("/findByMoneyBetween")
    @ApiOperation(value = "通过金额范围查询",notes = "return List")
    public List<JSONObject> findByMoneyBetween(double min, double max) {
        return costService.findByMoneyBetween(min, max);
    }
}
