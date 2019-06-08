package sexygroup.spring.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sexygroup.spring.common.controller.BaseController;
import sexygroup.spring.pojo.CardLevel;
import sexygroup.spring.service.CardLevelService;

@RestController
@RequestMapping("/cardLevel")
public class CardLevelController extends BaseController<CardLevel, CardLevelService> {

}
