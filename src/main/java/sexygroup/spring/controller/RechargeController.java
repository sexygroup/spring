package sexygroup.spring.controller;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sexygroup.spring.common.controller.BaseController;
import sexygroup.spring.pojo.Recharge;
import sexygroup.spring.service.RechargeService;
import sexygroup.spring.utils.DateUtil;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/recharge")
@Api(tags = "充值")
public class RechargeController extends BaseController<Recharge, RechargeService> {
    @Autowired
    private RechargeService rechargeService;

    @GetMapping("/findAllDetail")
    @ApiOperation(value = "查询所有（包含卡信息和充值信息）", notes = "return List")
    public List<JSONObject> findAllDetail() {
        return rechargeService.findAllDetail();
    }

    @GetMapping("/findByRechargeId")
    @ApiOperation(value = "通过充值id查询（包含卡信息和充值信息）", notes = "return JSON")
    public Optional<JSONObject> findByRechargeId(Integer id) {
        return Optional.ofNullable(rechargeService.findByRechargeId(id));
    }

    @GetMapping("/findByCardId")
    @ApiOperation(value = "通过卡id查询（包含卡信息和充值信息）", notes = "return List")
    public List<JSONObject> findByCardId(Integer id) {
        return rechargeService.findByCardId(id);
    }

    @GetMapping("/findByDateBetween")
    @ApiOperation(value = "通过充值日期范围查询（日期格式：2019-01-01 00:00:00）（包含卡信息和充值信息）", notes = "return List")
    public List<JSONObject> findByDateBetween(String startTime, String endTime) {
        return rechargeService.findByDateBetween(startTime, endTime);
    }

    @GetMapping("/findByRelativeDateBetween")
    @ApiOperation(value = "通过日期范围查询(相对于当前日期)", notes = "return List")
    public List<JSONObject> findByRelativeDateBetween(int relYear1, int relMonth1, int relDay1, int relYear2, int relMonth2, int relDay2) {
        String[] dateRange = DateUtil.getRelativeDateRange(relYear1, relMonth1, relDay1, relYear2, relMonth2, relDay2);
        return rechargeService.findByDateBetween(dateRange[0], dateRange[1]);
    }

    @GetMapping("/findByPriceBetween")
    @ApiOperation(value = "通过充值金额金额范围查询（包含卡信息和充值信息）", notes = "return List")
    public List<JSONObject> findByPriceBetween(double min, double max) {
        return rechargeService.findByPriceBetween(min, max);
    }

    @GetMapping("/cancelRecharge")
    @ApiOperation(value = "通过充值id撤销充值", notes = "return Integer: 0失败，1成功")
    public Integer cancelConsume(Integer rechargeId) {
        return rechargeService.cancelRecharge(rechargeId);
    }

}
