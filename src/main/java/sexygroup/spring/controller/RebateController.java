package sexygroup.spring.controller;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sexygroup.spring.service.RebateService;

import java.util.List;

@RestController
@RequestMapping("/rebate")
@Api(tags = "返利")
public class RebateController {
    @Autowired
    private RebateService rebateService;

    @GetMapping("/findAllDetail")
    @ApiOperation(value = "查询所有", notes = "return List")
    public List<JSONObject> findAllDetail() {
        return rebateService.findAllDetail();
    }

    //通过消费信息查
    @GetMapping("/findByConsumeId")
    @ApiOperation(value = "通过消费id查", notes = "return JSON")
    public JSONObject findByConsumeId(Integer id) {
        return rebateService.findByConsumeId(id);
    }

    @GetMapping("/findByDateBetween")
    @ApiOperation(value = "通过消费日期范围查询（日期格式：2019-01-01 00:00:00）", notes = "return List")
    public List<JSONObject> findByDateBetween(String startTime, String endTime) {
        return rebateService.findByDateBetween(startTime, endTime);
    }

    //通过员工信息查
    @GetMapping("/findByStaffId")
    @ApiOperation(value = "通过员工id查", notes = "return List")
    public List<JSONObject> findByStaffId(Integer id) {
        return rebateService.findByStaffId(id);
    }

    @GetMapping("/findByStaffName")
    @ApiOperation(value = "通过员工名称查（模糊查询）", notes = "return List")
    public List<JSONObject> findByStaffName(String name) {
        return rebateService.findByStaffName(name);
    }

    //通过卡信息查
    @GetMapping("/findByCardId")
    @ApiOperation(value = "通过卡id查,查出这个卡给他的推荐人返利的记录", notes = "return List")
    public List<JSONObject> findByCardId(Integer id) {
        return rebateService.findByCardId(id);
    }

    @GetMapping("/findByReferrerCardId")
    @ApiOperation(value = "通过推荐人卡id查，查该推荐人收到的返利的记录", notes = "return List")
    public List<JSONObject> findByReferrerCardId(Integer id) {
        return rebateService.findByReferrerCardId(id);
    }

    //通过客户信息查
    @GetMapping("/findByClientId")
    @ApiOperation(value = "通过客户id查，查出这个客户的卡给它的推荐人返利的记录", notes = "return List")
    public List<JSONObject> findByClientId(Integer id) {
        return rebateService.findByClientId(id);
    }

    @GetMapping("/findByClientName")
    @ApiOperation(value = "通过客户名称查（模糊查询），查出这个客户的卡给它的推荐人返利的记录", notes = "return List")
    public List<JSONObject> findByClientName(String name) {
        return rebateService.findByClientName(name);
    }

    @GetMapping("/findByClientPhone")
    @ApiOperation(value = "通过客户手机号查", notes = "return List")
    public List<JSONObject> findByClientPhone(String phone) {
        return rebateService.findByClientPhone(phone);
    }

    //通过推荐人信息查
    @GetMapping("/findByReferrerClientId")
    @ApiOperation(value = "通过推荐人id查，查该推荐人收到的返利的记录(推荐人clientId即开卡客户id)", notes = "return List")
    public List<JSONObject> findByReferrerClientId(Integer id) {
        return rebateService.findByReferrerClientId(id);
    }

    @GetMapping("/findByReferrerClientName")
    @ApiOperation(value = "通过推荐人名称查（模糊查询），查该推荐人收到的返利的记录(推荐人clientName即开卡客户name)", notes = "return List")
    public List<JSONObject> findByReferrerClientName(String name) {
        return rebateService.findByReferrerClientName(name);
    }

    @GetMapping("/findByReferrerClientPhone")
    @ApiOperation(value = "通过推荐人手机号查", notes = "return List")
    public List<JSONObject> findByReferrerClientPhone(String phone) {
        return rebateService.findByReferrerClientPhone(phone);
    }

    //通过服务信息查
    @GetMapping("/findByServiceId")
    @ApiOperation(value = "通过服务id查", notes = "return List")
    public List<JSONObject> findByServiceId(Integer id) {
        return rebateService.findByServiceId(id);
    }

    @GetMapping("/findByServiceName")
    @ApiOperation(value = "通过服务名称查(模糊查询)", notes = "return List")
    public List<JSONObject> findByServiceName(String name) {
        return rebateService.findByServiceName(name);
    }

}
