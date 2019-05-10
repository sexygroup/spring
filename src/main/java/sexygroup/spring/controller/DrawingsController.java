package sexygroup.spring.controller;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sexygroup.spring.pojo.Drawings;
import sexygroup.spring.service.DrawingsService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/drawings")
public class DrawingsController {
    @Autowired
    DrawingsService drawingsService;

    @GetMapping("/findAll")
    public List<Drawings> findAll() {
        return drawingsService.findAll();
    }

    @GetMapping("/findById")
    public Optional<Drawings> findById(Integer id) {
        return drawingsService.findById(id);
    }

    @PostMapping("/save")
    public Drawings save(@RequestBody Drawings drawings) {
        return drawingsService.save(drawings);
    }

    @PostMapping("/deleteById")
    public boolean deleteById(Integer id) {
        drawingsService.deleteById(id);
        return true;
    }

    @GetMapping("/findAllDetail")
    public List<JSONObject> findAllDetail() {
        return drawingsService.findAllDetail();
    }

    @ApiOperation(value = "通过‘提现ID’查询",notes = "返回JSON")
    @GetMapping("/findByIdDetail")
    public JSONObject findByIdDetail(Integer id) {
        return drawingsService.findByIdDetail(id);
    }

    @ApiOperation(value = "通过‘卡ID’查询",notes = "返回LIST")
    @GetMapping("/findByCardIdDetail")
    public List<JSONObject> findByCardIdDetail(Integer id){
        return drawingsService.findByCardIdDetail(id);
    }

    @ApiOperation(value = "通过‘客户（卡的持有人）ID’查询",notes = "返回LIST")
    @GetMapping("/findByClientIdDetail")
    public List<JSONObject> findByClientIdDetail(Integer id){
        return drawingsService.findByClientIdDetail(id);
    }
    @ApiOperation(value = "通过‘客户（卡的持有人）名称’模糊查询",notes = "返回LIST")
    @GetMapping("/findByClientNameDetail")
    public List<JSONObject> findByClientNameDetail(String name){
        return drawingsService.findByClientNameDetail(name);
    }

    @ApiOperation(value = "通过‘提现日期’范围查询",notes = "返回LIST")
    @GetMapping("/findByDataBetweenDetail")
    public List<JSONObject> findByDataBetweenDetail(String startTime,String endTime){
        return drawingsService.findByDataBetweenDetail(startTime,endTime);
    }

}
