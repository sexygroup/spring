package sexygroup.spring.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sexygroup.spring.common.controller.BaseController;
import sexygroup.spring.pojo.Staff;
import sexygroup.spring.service.StaffService;

@RestController
@RequestMapping("/staff")
public class StaffController extends BaseController<Staff, StaffService> {

}
