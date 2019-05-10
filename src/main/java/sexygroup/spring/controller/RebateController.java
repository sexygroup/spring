package sexygroup.spring.controller;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sexygroup.spring.pojo.Rebate;
import sexygroup.spring.service.RebateService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/rebate")
public class RebateController {
    @Autowired
    RebateService rebateService;

    @GetMapping("/findAll")
    public List<Rebate> findAll() {
        return rebateService.findAll();
    }

    @GetMapping("/findById")
    public Optional<Rebate> findById(Integer id) {
        return rebateService.findById(id);
    }

    @PostMapping("/save")
    public Rebate save(@RequestBody Rebate rebate) {
        return rebateService.save(rebate);
    }

    @PostMapping("/deleteById")
    public boolean deleteById(Integer id) {
        rebateService.deleteById(id);
        return true;
    }

    @GetMapping("/findAllDetail")
    public List<JSONObject> findAllDetail() {
        return rebateService.findAllDetail();
    }

    @ApiOperation(value = "通过‘返利ID’查询",notes = "返回JSON")
    @GetMapping("/findByIdDetail")
    public JSONObject findByIdDetail(Integer id) {
        return rebateService.findByIdDetail(id);
    }

    @ApiOperation(value = "通过‘卡ID’查询",notes = "返回LIST")
    @GetMapping("/findByCardIdDetail")
    public List<JSONObject> findByCardIdDetail(Integer id){
        return rebateService.findByCardIdDetail(id);
    }

    @ApiOperation(value = "通过‘客户（卡的持有人）ID’查询",notes = "返回LIST")
    @GetMapping("/findByClientIdDetail")
    public List<JSONObject> findByClientIdDetail(Integer id){
        return rebateService.findByClientIdDetail(id);
    }

    @ApiOperation(value = "通过‘客户（卡的持有人）名称’模糊查询",notes = "返回LIST")
    @GetMapping("/findByClientNameDetail")
    public List<JSONObject> findByClientNameDetail(String name){
        return rebateService.findByClientNameDetail(name);
    }

    @ApiOperation(value = "通过‘推荐人卡号（ID）’查询",notes = "返回LIST")
    @GetMapping("/findByReferrerIdDetail")
    public List<JSONObject> findByReferrerIdDetail(Integer id){
        return rebateService.findByReferrerIdDetail(id);
    }

    @ApiOperation(value = "通过‘返利日期’范围查询",notes = "返回LIST")
    @GetMapping("/findByDataBetweenDetail")
    public List<JSONObject> findByDataBetweenDetail(String startTime,String endTime){
        return rebateService.findByDataBetweenDetail(startTime,endTime);
    }

}
