package sexygroup.spring.controller;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sexygroup.spring.pojo.Recharge;
import sexygroup.spring.service.RechargeService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/recharge")
public class RechargeController {
    @Autowired
    RechargeService rechargeService;

    @GetMapping("/findAll")
    public List<Recharge> findAll() {
        return rechargeService.findAll();
    }

    @GetMapping("/findById")
    public Optional<Recharge> findById(Integer id) {
        return rechargeService.findById(id);
    }

    @PostMapping("/save")
    public Recharge save(@RequestBody Recharge recharge) {
        return rechargeService.save(recharge);
    }

    @PostMapping("/deleteById")
    public boolean deleteById(Integer id) {
        rechargeService.deleteById(id);
        return true;
    }

    @GetMapping("/findAllDetail")
    public List<JSONObject> findAllDetail() {
        return rechargeService.findAllDetail();
    }

    @ApiOperation(value = "通过‘充值ID’查询",notes = "返回JSON")
    @GetMapping("/findByIdDetail")
    public JSONObject findByIdDetail(Integer id) {
        return rechargeService.findByIdDetail(id);
    }

    @ApiOperation(value = "通过‘充值到的卡ID’查询",notes = "返回LIST")
    @GetMapping("/findByCardIdDetail")
    public List<JSONObject> findByCardIdDetail(Integer id){
        return rechargeService.findByCardIdDetail(id);
    }

    @ApiOperation(value = "通过‘客户（卡的持有人）ID’查询",notes = "返回LIST")
    @GetMapping("/findByClientIdDetail")
    public List<JSONObject> findByClientIdDetail(Integer id){
        return rechargeService.findByClientIdDetail(id);
    }

    @ApiOperation(value = "通过‘客户（卡的持有人）名称’模糊查询",notes = "返回LIST")
    @GetMapping("/findByClientNameDetail")
    public List<JSONObject> findByClientNameDetail(String name){
        return rechargeService.findByClientNameDetail(name);
    }

    @ApiOperation(value = "通过‘充值日期’范围查询",notes = "返回LIST")
    @GetMapping("/findByDataBetweenDetail")
    public List<JSONObject> findByDataBetweenDetail(String startTime,String endTime){
        return rechargeService.findByDataBetweenDetail(startTime,endTime);
    }
}
