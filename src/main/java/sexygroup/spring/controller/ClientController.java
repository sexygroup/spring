package sexygroup.spring.controller;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sexygroup.spring.pojo.Client;
import sexygroup.spring.service.ClientService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/client")
public class ClientController {
    @Autowired
    ClientService clientService;

    @GetMapping("/findAll")
    public List<Client> findAll() {
        return clientService.findAll();
    }

    @GetMapping("/findById")
    public Optional<Client> findById(Integer id) {
        return clientService.findById(id);
    }

    @PostMapping("/save")
    public Client save(@RequestBody Client client) {
        return clientService.save(client);
    }

    @PostMapping("/deleteById")
    public boolean deleteById(Integer id) {
        clientService.deleteById(id);
        return true;
    }

    @GetMapping("/findAllDetail")
    public List<JSONObject> findAllDetail() {
        return clientService.findAllDetail();
    }

    @GetMapping("/findByIdDetail")
    public List<JSONObject> findByIdDetail(Integer id) {
        return clientService.findByIdDetail(id);
    }

    @ApiOperation(value = "查询手机号是否存在",notes = "返回boolean")
    @GetMapping("/existsByClientPhone")
    public boolean existsByClientPhone(String clientPhone) {
        return clientService.existsByClientPhone(clientPhone);
    }

    @ApiOperation(value = "通过‘客户名称’查询",notes = "返回LIST")
    @GetMapping("/findByClientNameDetail")
    public List<JSONObject> findByClientNameDetail(String name) {
        return clientService.findByClientNameDetail(name);
    }

    @ApiOperation(value = "通过‘客户手机号’查询",notes = "返回LIST")
    @GetMapping("/findByClientPhoneDetail")
    public List<JSONObject> findByClientPhoneDetail(String phone) {
        return clientService.findByClientPhoneDetail(phone);
    }
}
