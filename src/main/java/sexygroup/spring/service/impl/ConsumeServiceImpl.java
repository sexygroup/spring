package sexygroup.spring.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.common.service.impl.BaseServiceImpl;
import sexygroup.spring.dao.ConsumeRepository;
import sexygroup.spring.pojo.Consume;
import sexygroup.spring.service.ConsumeService;

@Service
@Transactional
public class ConsumeServiceImpl extends BaseServiceImpl<Consume, ConsumeRepository> implements ConsumeService {


}
