package sexygroup.spring.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sexygroup.spring.common.controller.BaseController;
import sexygroup.spring.pojo.Consume;
import sexygroup.spring.service.ConsumeService;
import sexygroup.spring.utils.DateUtil;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/consume")
@Api(tags = "消费")
public class ConsumeController extends BaseController<Consume, ConsumeService> {

    @Autowired
    private ConsumeService consumeService;

    @GetMapping("/findAllDetail")
    @ApiOperation(value = "查询所有", notes = "return List")
    public List<JSONObject> findAllDetail() {
        return consumeService.findAllDetail();
    }

    //通过消费信息查
    @GetMapping("/findByConsumeId")
    @ApiOperation(value = "通过消费id查", notes = "return JSON")
    public Optional<JSONObject> findByConsumeId(Integer id) {
        return Optional.ofNullable(consumeService.findByConsumeId(id));
    }

    @GetMapping("/findByDateBetween")
    @ApiOperation(value = "通过消费日期范围查询（日期格式：2019-01-01 00:00:00）", notes = "return List")
    public List<JSONObject> findByDateBetween(String startTime, String endTime) {
        return consumeService.findByDateBetween(startTime, endTime);
    }

    @GetMapping("/findByRelativeDateBetween")
    @ApiOperation(value = "通过消费日期范围查询(相对于当前日期)", notes = "return List")
    public List<JSONObject> findByRelativeDateBetween(int relYear1, int relMonth1, int relDay1, int relYear2, int relMonth2, int relDay2) {
        String[] dateRange = DateUtil.getRelativeDateRange(relYear1, relMonth1, relDay1, relYear2, relMonth2, relDay2);
        return consumeService.findByDateBetween(dateRange[0], dateRange[1]);
    }

    //通过员工信息查
    @GetMapping("/findByStaffId")
    @ApiOperation(value = "通过员工id查", notes = "return List")
    public List<JSONObject> findByStaffId(Integer id) {
        return consumeService.findByStaffId(id);
    }

    @GetMapping("/findByStaffName")
    @ApiOperation(value = "通过员工名称查（模糊查询）", notes = "return List")
    public List<JSONObject> findByStaffName(String name) {
        return consumeService.findByStaffName(name);
    }

    //通过卡信息查
    @GetMapping("/findByCardId")
    @ApiOperation(value = "通过卡id查", notes = "return List")
    public List<JSONObject> findByCardId(Integer id) {
        return consumeService.findByCardId(id);
    }

    @GetMapping("/findByCardReferrer")
    @ApiOperation(value = "通过卡推荐人id查", notes = "return List")
    public List<JSONObject> findByCardReferrer(Integer id) {
        return consumeService.findByCardReferrer(id);
    }

    //通过客户信息查
    @GetMapping("/findByClientId")
    @ApiOperation(value = "通过客户id查", notes = "return List")
    public List<JSONObject> findByClientId(Integer id) {
        return consumeService.findByClientId(id);
    }

    @GetMapping("/findByClientName")
    @ApiOperation(value = "通过客户名称查（模糊查询）", notes = "return List")
    public List<JSONObject> findByClientName(String name) {
        return consumeService.findByClientName(name);
    }

    @GetMapping("/findByClientPhone")
    @ApiOperation(value = "通过客户手机号查", notes = "return List")
    public List<JSONObject> findByClientPhone(String phone) {
        return consumeService.findByClientPhone(phone);
    }

    @GetMapping("/findByClientGender")
    @ApiOperation(value = "通过客户性别查", notes = "return List")
    public List<JSONObject> findByClientGender(String gender) {
        return consumeService.findByClientGender(gender);
    }

    @GetMapping("/findByClientAge")
    @ApiOperation(value = "通过客户年龄段查", notes = "return List")
    public List<JSONObject> findByClientAge(String age) {
        return consumeService.findByClientAge(age);
    }

    //通过服务信息查
    @GetMapping("/findByServiceId")
    @ApiOperation(value = "通过服务id查", notes = "return List")
    public List<JSONObject> findByServiceId(Integer id) {
        return consumeService.findByServiceId(id);
    }

    @GetMapping("/findByServiceName")
    @ApiOperation(value = "通过服务名称查(模糊查询)", notes = "return List")
    public List<JSONObject> findByServiceName(String name) {
        return consumeService.findByServiceName(name);
    }

    @GetMapping("/cancelConsume")
    @ApiOperation(value = "通过消费id撤销消费", notes = "return Integer: 0失败，1成功")
    public Integer cancelConsume(Integer consumeId) {
        return consumeService.cancelConsume(consumeId);
    }

    @PostMapping("/saveConsumeList")
    @ApiOperation(value = "保存消费列表", notes = "return boolean")
    public Boolean saveConsumeList(@RequestBody JSONObject consumeList) {
        Integer cardId = consumeList.getInteger("cardId");
        Integer clientId = consumeList.getInteger("clientId");
        Integer staffId = consumeList.getInteger("staffId");
        Double totalDeduct = consumeList.getDouble("totalDeduct");
        JSONArray serviceList = consumeList.getJSONArray("serviceList");
        return consumeService.saveConsumeList(cardId, clientId, staffId, totalDeduct, serviceList);
    }
}
