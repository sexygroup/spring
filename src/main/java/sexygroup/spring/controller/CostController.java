package sexygroup.spring.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sexygroup.spring.common.controller.BaseController;
import sexygroup.spring.pojo.Cost;
import sexygroup.spring.service.CostService;

@RestController
@RequestMapping("/cost")
public class CostController extends BaseController<Cost, CostService> {

}
