package sexygroup.spring.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sexygroup.spring.common.controller.BaseController;
import sexygroup.spring.pojo.Client;
import sexygroup.spring.service.ClientService;

@RestController
@RequestMapping("/client")
public class ClientController extends BaseController<Client, ClientService> {

}
