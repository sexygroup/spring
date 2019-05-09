package sexygroup.spring.controller;

import com.alibaba.fastjson.JSONObject;
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

    @GetMapping("/findByIdDetail")
    public JSONObject findByIdDetail(Integer id) {
        return drawingsService.findByIdDetail(id);
    }

}
