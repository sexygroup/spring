package sexygroup.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sexygroup.spring.pojo.CardLevel;
import sexygroup.spring.service.CardLevelService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cardLevel")
public class CardLevelController {
    @Autowired
    CardLevelService cardLevelService;

    @GetMapping("/findAll")
    public List<CardLevel> findAll() {
        return cardLevelService.findAll();
    }

    @GetMapping("/findById")
    public Optional<CardLevel> findById(Integer id) {
        return cardLevelService.findById(id);
    }

    @PostMapping("/save")
    public CardLevel save(@RequestBody CardLevel cardLevel) {
        return cardLevelService.save(cardLevel);
    }

    @PostMapping("/deleteById")
    public boolean deleteById(Integer id) {
        cardLevelService.deleteById(id);
        return true;
    }

}
