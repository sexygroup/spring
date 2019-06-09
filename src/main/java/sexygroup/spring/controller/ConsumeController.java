package sexygroup.spring.controller;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sexygroup.spring.common.controller.BaseController;
import sexygroup.spring.pojo.Consume;
import sexygroup.spring.service.ConsumeService;

import java.util.List;

@RestController
@RequestMapping("/consume")
@Api(tags="消费")
public class ConsumeController extends BaseController<Consume, ConsumeService> {

    @Autowired
    private ConsumeService consumeService;

    @GetMapping("/findAllDetail")
    @ApiOperation(value = "查询所有",notes = "return List")
    public List<JSONObject> findAllDetail() {
        return consumeService.findAllDetail();
    }

    //通过消费信息查
    @GetMapping("/findByConsumeId")
    @ApiOperation(value = "通过消费id查",notes = "return JSON")
    public JSONObject findByConsumeId(Integer id) {
        return consumeService.findByConsumeId(id);
    }

    @GetMapping("/findByDateBetween")
    @ApiOperation(value = "通过消费日期范围查询（日期格式：2019-01-01 00:00:00）",notes = "return List")
    public List<JSONObject> findByDateBetween(String startTime, String endTime) {
        return consumeService.findByDateBetween(startTime, endTime);
    }

    //通过员工信息查
    @GetMapping("/findByStaffId")
    @ApiOperation(value = "通过员工id查",notes = "return List")
    public List<JSONObject> findByStaffId(Integer id) {
        return consumeService.findByStaffId(id);
    }

    @GetMapping("/findByStaffName")
    @ApiOperation(value = "通过员工名称查（模糊查询）",notes = "return List")
    public List<JSONObject> findByStaffName(String name) {
        return consumeService.findByStaffName(name);
    }

    //通过卡信息查
    @GetMapping("/findByCardId")
    @ApiOperation(value = "通过卡id查",notes = "return List")
    public List<JSONObject> findByCardId(Integer id) {
        return consumeService.findByCardId(id);
    }

    @GetMapping("/findByCardReferrer")
    @ApiOperation(value = "通过卡推荐人id查",notes = "return List")
    public List<JSONObject> findByCardReferrer(Integer id) {
        return consumeService.findByCardReferrer(id);
    }

    //通过客户信息查
    @GetMapping("/findByClientId")
    @ApiOperation(value = "通过客户id查",notes = "return List")
    public List<JSONObject> findByClientId(Integer id) {
        return consumeService.findByClientId(id);
    }

    @GetMapping("/findByClientName")
    @ApiOperation(value = "通过客户名称查（模糊查询）",notes = "return List")
    public List<JSONObject> findByClientName(String name) {
        return consumeService.findByClientName(name);
    }

    @GetMapping("/findByClientPhone")
    @ApiOperation(value = "通过客户手机号查",notes = "return List")
    public List<JSONObject> findByClientPhone(String phone) {
        return consumeService.findByClientPhone(phone);
    }

    @GetMapping("/findByClientGender")
    @ApiOperation(value = "通过客户性别查",notes = "return List")
    public List<JSONObject> findByClientGender(String gender) {
        return consumeService.findByClientGender(gender);
    }

    @GetMapping("/findByClientAge")
    @ApiOperation(value = "通过客户年龄段查",notes = "return List")
    public List<JSONObject> findByClientAge(String age) {
        return consumeService.findByClientAge(age);
    }

    //通过服务信息查
    @GetMapping("/findByServiceId")
    @ApiOperation(value = "通过服务id查",notes = "return List")
    public List<JSONObject> findByServiceId(Integer id) {
        return consumeService.findByServiceId(id);
    }

    @GetMapping("/findByServiceName")
    @ApiOperation(value = "通过服务名称查(模糊查询)",notes = "return List")
    public List<JSONObject> findByServiceName(String name) {
        return consumeService.findByServiceName(name);
    }
}
