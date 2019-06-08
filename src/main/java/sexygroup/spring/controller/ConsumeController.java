package sexygroup.spring.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sexygroup.spring.common.controller.BaseController;
import sexygroup.spring.pojo.Consume;
import sexygroup.spring.service.ConsumeService;

@RestController
@RequestMapping("/consume")
public class ConsumeController extends BaseController<Consume, ConsumeService> {

}
