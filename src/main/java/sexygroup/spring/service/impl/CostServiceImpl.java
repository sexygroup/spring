package sexygroup.spring.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.common.service.impl.BaseServiceImpl;
import sexygroup.spring.dao.CostRepository;
import sexygroup.spring.pojo.Cost;
import sexygroup.spring.service.CostService;

@Service
@Transactional
public class CostServiceImpl extends BaseServiceImpl<Cost, CostRepository> implements CostService {


}
