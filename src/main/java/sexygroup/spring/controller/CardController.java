package sexygroup.spring.controller;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sexygroup.spring.common.controller.BaseController;
import sexygroup.spring.pojo.Card;
import sexygroup.spring.pojo.Client;
import sexygroup.spring.service.CardService;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/card")
@Api(tags = "卡")
public class CardController extends BaseController<Card, CardService> {
    @Autowired
    private CardService cardService;

    @GetMapping("/findAllDetail")
    @ApiOperation(value = "查询所有(包含卡和客户信息)", notes = "return List")
    public List<JSONObject> findAllDetail() {
        return cardService.findAllDetail();
    }

    @GetMapping("/findAllHolder")
    @ApiOperation(value = "查询所有持有人卡信息(包含卡和持卡人信息)", notes = "return List")
    public List<JSONObject> findAllHolder() {
        return cardService.findAllHolder();
    }

    @GetMapping("/findByCardId")
    @ApiOperation(value = "通过卡id查卡下所有客户信息(包含卡和客户信息)", notes = "return List")
    public List<JSONObject> findByCardId(Integer id) {
        return cardService.findByCardId(id);
    }

    @GetMapping("/findHolderByCardId")
    @ApiOperation(value = "通过卡id查询持有人信息(包含卡和持卡人信息)", notes = "return JSON")
    public Optional<JSONObject> findHolderByCardId(Integer id) {
        return Optional.ofNullable(cardService.findHolderByCardId(id));
    }

    @GetMapping("/findReferrerByCardId")
    @ApiOperation(value = "通过卡id查询推荐人信息(包含卡和客户信息)", notes = "return JSON")
    public Optional<JSONObject> findReferrerByCardId(Integer id) {
        return Optional.ofNullable(cardService.findReferrerByCardId(id));
    }

    @GetMapping("/findByReferrer")
    @ApiOperation(value = "查询某个推荐人推荐的所有卡信息(包含卡和客户信息)", notes = "return List")
    public List<JSONObject> findByReferrer(Integer referrer) {
        return cardService.findByReferrer(referrer);
    }

    //通过持卡人条件查询
    @GetMapping("/findByHolderName")
    @ApiOperation(value = "通过持卡人名称查卡信息（模糊查询）(包含卡和持卡人信息)", notes = "return List")
    public List<JSONObject> findByHolderName(String name) {
        return cardService.findByHolderName(name);
    }

    @GetMapping("/findByHolderPhone")
    @ApiOperation(value = "通过持卡人手机号查询(包含卡和持卡人信息)", notes = "return List")
    public List<JSONObject> findByHolderPhone(String phone) {
        return cardService.findByHolderPhone(phone);
    }

    //通过客户条件查询
    @GetMapping("/findByClientId")
    @ApiOperation(value = "通过客户id查卡信息(包含卡和客户信息)", notes = "return JSON")
    public Optional<JSONObject> findByClientId(Integer id) {
        return Optional.ofNullable(cardService.findByClientId(id));
    }

    @GetMapping("/findByClientName")
    @ApiOperation(value = "通过客户名称查客户的卡信息(包含卡和客户信息)", notes = "return List")
    public List<JSONObject> findByClientName(String name) {
        return cardService.findByClientName(name);
    }

    @GetMapping("/findByClientPhone")
    @ApiOperation(value = "通过客户手机号查客户的卡信息(包含卡和客户信息)", notes = "return List")
    public List<JSONObject> findByClientPhone(String phone) {
        return cardService.findByClientPhone(phone);
    }

    @GetMapping("/findByClientGender")
    @ApiOperation(value = "通过客户性别查(包含卡和客户信息)", notes = "return List")
    public List<JSONObject> findByClientGender(String gender) {
        return cardService.findByClientGender(gender);
    }

    @GetMapping("/findByClientAge")
    @ApiOperation(value = "通过客户年龄段查(包含卡和客户信息)", notes = "return List")
    public List<JSONObject> findByClientAge(String age) {
        return cardService.findByClientAge(age);
    }


    @GetMapping("/findByMoneyBetween")
    @ApiOperation(value = "通过卡余额范围查询(只查持有人和卡信息)", notes = "return List")
    public List<JSONObject> findByMoneyBetween(double min, double max) {
        return cardService.findByMoneyBetween(min, max);
    }

    @GetMapping("/findByPointBetween")
    @ApiOperation(value = "通过卡积分范围查询(只查持有人和卡信息)", notes = "return List")
    public List<JSONObject> findByPointBetween(double min, double max) {
        return cardService.findByPointBetween(min, max);
    }

    @PostMapping("/addNewCard")
    @ApiOperation(value = "添加新卡（需要卡信息和客户信息）", notes = "return boolean")
    public Optional<JSONObject> addNewCard(@RequestBody JSONObject jsonObject) {
        Card card = new Card();
        card.setCardQuestion(jsonObject.getString("cardQuestion"));
        card.setCardAnswer(jsonObject.getString("cardAnswer"));
        card.setCardMoney(jsonObject.getDouble("cardMoney"));
        card.setCardPassword(jsonObject.getString("cardPassword"));
        card.setCardReferrer(jsonObject.getInteger("cardReferrer"));

        Client client = new Client();
        client.setClientAge(jsonObject.getString("clientAge"));
        client.setClientGender(jsonObject.getString("clientGender"));
        client.setClientPhone(jsonObject.getString("clientPhone"));
        client.setClientName(jsonObject.getString("clientName"));
        System.out.println(card);
        System.out.println(client);
        return Optional.ofNullable(cardService.addNewCard(card, client));
    }

    @GetMapping("/deleteCard")
    @ApiOperation(value = "通过卡id删除卡、客户及其图片", notes = "return boolean")
    public Boolean deleteCard(HttpServletRequest request, Integer cardId) {
        //获取文件保存路径
        String fileDir = request.getSession().getServletContext().getRealPath("/") + "upload/";
        return cardService.deleteCard(cardId, fileDir);
    }

}
