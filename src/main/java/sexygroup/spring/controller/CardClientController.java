package sexygroup.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sexygroup.spring.pojo.CardClient;
import sexygroup.spring.pojo.CardClientKey;
import sexygroup.spring.service.CardClientService;
import sexygroup.spring.service.CardService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cardClient")
public class CardClientController {
    @Autowired
    CardClientService cardClientService;

    @GetMapping("/findAll")
    public List<CardClient> findAll() {
        return cardClientService.findAll();
    }

    @GetMapping("/findById")
    public Optional<CardClient> findById(CardClientKey id) {
        return cardClientService.findById(id);
    }

    @PostMapping("/save")
    public CardClient save(@RequestBody CardClient card) {
        return cardClientService.save(card);
    }

    @PostMapping("/deleteById")
    public boolean deleteById(CardClientKey id) {
        cardClientService.deleteById(id);
        return true;
    }

}