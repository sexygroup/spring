package sexygroup.spring.controller;

import com.fasterxml.jackson.databind.util.JSONPObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sexygroup.spring.pojo.Admin;
import sexygroup.spring.service.AdminService;

import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    AdminService adminService;

    @GetMapping("/findAll")
    public List<Admin> findAll() {
        return adminService.findAll();
    }

    @GetMapping("/findById")
    public Optional<Admin> findById(Integer id) {
        return adminService.findById(id);
    }

    @PostMapping("/save")
    public Admin save(@RequestBody Admin admin) {
        return adminService.save(admin);
    }

    @PostMapping("/deleteById")
    public boolean deleteById(Integer id) {
        adminService.deleteById(id);
        return true;
    }

}
