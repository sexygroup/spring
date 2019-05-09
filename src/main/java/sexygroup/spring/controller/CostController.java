package sexygroup.spring.controller;

import com.alibaba.fastjson.JSONObject;
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
    CostService costService;

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

    @GetMapping("/findByIdDetail")
    public JSONObject findByIdDetail(Integer id) {
        return costService.findByIdDetail(id);
    }

}
