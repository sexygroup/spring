package sexygroup.spring.controller;

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

}
