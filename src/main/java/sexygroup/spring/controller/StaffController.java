package sexygroup.spring.controller;

import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sexygroup.spring.common.controller.BaseController;
import sexygroup.spring.pojo.Staff;
import sexygroup.spring.service.StaffService;

@RestController
@RequestMapping("/staff")
@Api(tags="员工")
public class StaffController extends BaseController<Staff, StaffService> {

}
