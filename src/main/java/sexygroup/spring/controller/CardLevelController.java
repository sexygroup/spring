package sexygroup.spring.controller;

import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sexygroup.spring.common.controller.BaseController;
import sexygroup.spring.pojo.CardLevel;
import sexygroup.spring.service.CardLevelService;

@RestController
@RequestMapping("/cardLevel")
@Api(tags="卡等级")
public class CardLevelController extends BaseController<CardLevel, CardLevelService> {

}
