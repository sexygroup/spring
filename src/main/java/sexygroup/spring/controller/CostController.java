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
import sexygroup.spring.utils.DateUtil;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cost")
@Api(tags = "成本")
public class CostController extends BaseController<Cost, CostService> {
    @Autowired
    private CostService costService;

    @GetMapping("/findByDateEquals")
    @ApiOperation(value = "查询某一天的记录（日期格式：2019-01-01）", notes = "return JSON")
    public Optional<JSONObject> findByDateEquals(String date) {
        return Optional.ofNullable(costService.findByDateEquals(date));
    }

    @GetMapping("/findByDateBetween")
    @ApiOperation(value = "通过日期范围查询（日期格式：2019-01-01）", notes = "return List")
    public List<JSONObject> findByDateBetween(String startTime, String endTime) {
        return costService.findByDateBetween(startTime, endTime);
    }

    @GetMapping("/findByRelativeDateBetween")
    @ApiOperation(value = "通过日期范围查询(相对于当前日期)", notes = "return List")
    public List<JSONObject> findByRelativeDateBetween(int relYear1, int relMonth1, int relDay1, int relYear2, int relMonth2, int relDay2) {
        String[] dateRange = DateUtil.getRelativeDateRange(relYear1, relMonth1, relDay1, relYear2, relMonth2, relDay2);
        return costService.findByDateBetween(dateRange[0], dateRange[1]);
    }

    @GetMapping("/findByMoneyBetween")
    @ApiOperation(value = "通过金额范围查询", notes = "return List")
    public List<JSONObject> findByMoneyBetween(double min, double max) {
        return costService.findByMoneyBetween(min, max);
    }
}
