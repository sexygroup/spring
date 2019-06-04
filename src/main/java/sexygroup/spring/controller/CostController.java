package sexygroup.spring.controller;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.ApiOperation;
import io.swagger.models.auth.In;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sexygroup.spring.pojo.Cost;
import sexygroup.spring.service.CostService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cost")
public class CostController {
    @Autowired
    private CostService costService;

    @GetMapping("/findAll")
    public List<Cost> findAll() {
        return costService.findAll();
    }

    @GetMapping("/findById")
    public Optional<Cost> findById(Integer id) {
        return costService.findById(id);
    }

    @PostMapping("/save")
    public Cost save(@RequestBody Cost cost) {
        return costService.save(cost);
    }

    @PostMapping("/deleteById")
    public boolean deleteById(Integer id) {
        costService.deleteById(id);
        return true;
    }

    @GetMapping("/findAllDetail")
    public List<JSONObject> findAllDetail() {
        return costService.findAllDetail();
    }

    @ApiOperation(value = "通过‘消费ID’查询",notes = "返回JSON")
    @GetMapping("/findByIdDetail")
    public JSONObject findByIdDetail(Integer id) {
        return costService.findByIdDetail(id);
    }

    @ApiOperation(value = "通过‘卡ID’查询",notes = "返回LIST")
    @GetMapping("/findByCardIdDetail")
    public List<JSONObject> findByCardIdDetail(Integer id){
        return costService.findByCardIdDetail(id);
    }

    @ApiOperation(value = "通过‘客户ID’查询",notes = "返回LIST")
    @GetMapping("/findByClientIdDetail")
    public List<JSONObject> findByClientIdDetail(Integer id){
        return costService.findByClientIdDetail(id);
    }

    @ApiOperation(value = "通过‘客户名称’模糊查询",notes = "返回LIST")
    @GetMapping("/findByClientNameDetail")
    public List<JSONObject> findByClientNameDetail(String name){
        return costService.findByClientNameDetail(name);
    }

    @ApiOperation(value = "通过‘服务ID’查询",notes = "返回LIST")
    @GetMapping("/findByServiceIdDetail")
    public List<JSONObject> findByServiceIdDetail(Integer id){
        return costService.findByServiceIdDetail(id);
    }

    @ApiOperation(value = "通过‘服务名称’模糊查询",notes = "返回LIST")
    @GetMapping("/findByServiceNameDetail")
    public List<JSONObject> findByServiceNameDetail(String name){
        return costService.findByServiceNameDetail(name);
    }

    @ApiOperation(value = "通过‘消费日期’范围查询",notes = "返回LIST")
    @GetMapping("/findByDateBetweenDetail")
    public List<JSONObject> findByDateBetweenDetail(String startTime,String endTime){
        return costService.findByDateBetweenDetail(startTime,endTime);
    }

}
