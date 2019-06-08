package sexygroup.spring.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sexygroup.spring.common.controller.BaseController;
import sexygroup.spring.pojo.Card;
import sexygroup.spring.service.CardService;

@RestController
@RequestMapping("/card")
public class CardController extends BaseController<Card, CardService> {

}
