package sexygroup.spring.controller;

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

}
