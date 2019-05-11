package sexygroup.spring.controller;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.ApiOperation;
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

    @GetMapping("/findAllDetail")
    public List<JSONObject> findAllDetail() {
        return cardService.findAllDetail();
    }

    @GetMapping("/findByIdDetail")
    public List<JSONObject> findByIdDetail(Integer id) {
        return cardService.findByIdDetail(id);
    }

    @GetMapping("/findByCardIdAndClientIdDetail")
    public JSONObject findByCardIdAndClientIdDetail(Integer cardId,Integer clientId) {
        return cardService.findByCardIdAndClientIdDetail(cardId, clientId);
    }

    @ApiOperation(value = "通过‘推荐人卡号’查询",notes = "返回LIST")
    @GetMapping("/findByCardReferrerDetail")
    public List<JSONObject> findByCardReferrerDetail(Integer id) {
        return cardService.findByCardReferrerDetail(id);
    }

    @ApiOperation(value = "通过‘持有人手机号’查询",notes = "返回JSON")
    @GetMapping("/findByHolderPhoneDetail")
    public JSONObject findByHolderPhoneDetail(String phone) {
        return cardService.findByHolderPhoneDetail(phone);
    }

    @ApiOperation(value = "通过‘持有人名称’模糊查询",notes = "返回LIST")
    @GetMapping("/findByHolderNameDetail")
    public List<JSONObject> findByHolderNameDetail(String name) {
        return cardService.findByHolderNameDetail(name);
    }

    @ApiOperation(value = "通过‘卡ID’查询持有人信息",notes = "返回JSON")
    @GetMapping("/findHolderByCardId")
    public JSONObject findHolderByCardId(Integer id) {
        return cardService.findHolderByCardId(id);
    }

    @ApiOperation(value = "查找所以持有人和卡的信息",notes = "返回LIST")
    @GetMapping("/findAllHolderDetail")
    public List<JSONObject> findAllHolderDetail() {
        return cardService.findAllHolderDetail();
    }
}
