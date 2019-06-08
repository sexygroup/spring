package sexygroup.spring.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.common.service.impl.BaseServiceImpl;
import sexygroup.spring.dao.AdminRepository;
import sexygroup.spring.pojo.Admin;
import sexygroup.spring.service.AdminService;

@Service
@Transactional
public class AdminServiceImpl extends BaseServiceImpl<Admin, AdminRepository> implements AdminService {


}
