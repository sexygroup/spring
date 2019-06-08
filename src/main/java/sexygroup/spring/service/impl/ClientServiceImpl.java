package sexygroup.spring.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.common.service.impl.BaseServiceImpl;
import sexygroup.spring.dao.ClientRepository;
import sexygroup.spring.pojo.Client;
import sexygroup.spring.service.ClientService;

@Service
@Transactional
public class ClientServiceImpl extends BaseServiceImpl<Client, ClientRepository> implements ClientService {


}
