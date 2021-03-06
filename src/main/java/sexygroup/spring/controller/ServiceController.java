package sexygroup.spring.controller;

import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sexygroup.spring.common.controller.BaseController;
import sexygroup.spring.pojo.Service;
import sexygroup.spring.service.ServiceService;

@RestController
@RequestMapping("/service")
@Api(tags = "服务")
public class ServiceController extends BaseController<Service, ServiceService> {

}
