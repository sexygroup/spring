package sexygroup.spring.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.common.service.impl.BaseServiceImpl;
import sexygroup.spring.dao.ServiceRepository;
import sexygroup.spring.service.ServiceService;

@Service
@Transactional
public class ServiceServiceImpl extends BaseServiceImpl<sexygroup.spring.pojo.Service, ServiceRepository> implements ServiceService {


}
