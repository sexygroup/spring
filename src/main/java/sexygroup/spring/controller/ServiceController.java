package sexygroup.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sexygroup.spring.pojo.Service;
import sexygroup.spring.service.ServiceService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/service")
public class ServiceController {
    @Autowired
    ServiceService serviceService;

    @GetMapping("/findAll")
    public List<Service> findAll() {
        return serviceService.findAll();
    }

    @GetMapping("/findById")
    public Optional<Service> findById(Integer id) {
        return serviceService.findById(id);
    }

    @PostMapping("/save")
    public Service save(@RequestBody Service service) {
        return serviceService.save(service);
    }

    @PostMapping("/deleteById")
    public boolean deleteById(Integer id) {
        serviceService.deleteById(id);
        return true;
    }

}
