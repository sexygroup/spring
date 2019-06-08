package sexygroup.spring.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.common.service.impl.BaseServiceImpl;
import sexygroup.spring.dao.RechargeRepository;
import sexygroup.spring.pojo.Recharge;
import sexygroup.spring.service.RechargeService;

@Service
@Transactional
public class RechargeServiceImpl extends BaseServiceImpl<Recharge, RechargeRepository> implements RechargeService {


}
