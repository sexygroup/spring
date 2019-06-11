package sexygroup.spring.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.common.service.impl.BaseServiceImpl;
import sexygroup.spring.dao.StaffRepository;
import sexygroup.spring.pojo.Staff;
import sexygroup.spring.service.StaffService;

@Service
@Transactional
public class StaffServiceImpl extends BaseServiceImpl<Staff, StaffRepository> implements StaffService {

}
