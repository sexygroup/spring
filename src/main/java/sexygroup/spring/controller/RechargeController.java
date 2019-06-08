package sexygroup.spring.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sexygroup.spring.common.controller.BaseController;
import sexygroup.spring.pojo.Recharge;
import sexygroup.spring.service.RechargeService;

@RestController
@RequestMapping("/recharge")
public class RechargeController extends BaseController<Recharge, RechargeService> {

}
