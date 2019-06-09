package sexygroup.spring.controller;

import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sexygroup.spring.common.controller.BaseController;
import sexygroup.spring.pojo.Admin;
import sexygroup.spring.service.AdminService;

@RestController
@RequestMapping("/admin")
@Api(tags="管理员")
public class AdminController extends BaseController<Admin, AdminService> {

}
