package sexygroup.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sexygroup.spring.pojo.Card;
import sexygroup.spring.service.CardService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/card")
public class CardController {
    @Autowired
    CardService cardService;

    @GetMapping("/findAll")
    public List<Card> findAll() {
        return cardService.findAll();
    }

    @GetMapping("/findById")
    public Optional<Card> findById(Integer id) {
        return cardService.findById(id);
    }

    @PostMapping("/save")
    public Card save(@RequestBody Card card) {
        return cardService.save(card);
    }

    @PostMapping("/deleteById")
    public boolean deleteById(Integer id) {
        cardService.deleteById(id);
        return true;
    }

}
