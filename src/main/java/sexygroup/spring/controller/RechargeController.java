package sexygroup.spring.controller;

import com.alibaba.fastjson.JSONObject;
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

    @GetMapping("/findByIdDetail")
    public JSONObject findByIdDetail(Integer id) {
        return rechargeService.findByIdDetail(id);
    }

}
